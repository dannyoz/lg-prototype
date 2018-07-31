import { ACTIVE_CLASS } from './constants';
import { isKeyDown, isKeyUp, isKeyLeft, isKeyRight, isKeySpace, getChildrenByClass } from './utils';

const defaults = {
  tabClass: 'tab',
  tabContentClass: 'tab-content',
  tabListClass: 'tab-list',
  tabPanelClass: 'tab-panel',
  initialTabIndex: 0
};

export default class Tabs {
  constructor(elem, options) {
    this._options = Object.assign({}, defaults, options);

    this._activeTabIndex = this._options.initialTabIndex;

    this._tabContentElem = getChildrenByClass(elem, this._options.tabContentClass).shift();
    this._tabListElem = getChildrenByClass(elem, this._options.tabListClass).shift();

    // Only initialise tabs if there are any
    if (this._tabListElem) {
      this._tabs = Array.from(this._tabListElem.querySelectorAll(`.${this._options.tabClass}`));
      this._tabPanels = getChildrenByClass(this._tabContentElem, this._options.tabPanelClass);
      this._activeTab = this._tabs[this._activeTabIndex];
      this._elem = elem;

      this.onClick = this.onClick.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);
      this.init();
    }
  }

  init() {
    this._tabListElem.addEventListener('click', this.onClick);
    this._tabListElem.addEventListener('keyup', this.onKeyUp);
  }

  onClick(event) {
    event.preventDefault();

    if (event.target.classList.contains(this._options.tabClass)
      && !event.target.classList.contains(ACTIVE_CLASS)) {
      this._activeTabIndex = Array.from(this._tabs).map(tab => tab.id).indexOf(event.target.id);
      this.toggle(event.target);
    }
  }

  onKeyUp(event) {
    const isPreviousKey = isKeyLeft(event) || isKeyUp(event);
    const isNextKey = isKeyRight(event) || isKeyDown(event);

    if (!isPreviousKey && !isNextKey) return;

    event.preventDefault();

    if (isPreviousKey) {
      this._activeTabIndex = this._activeTabIndex === 0 ? (this._tabs.length - 1) : (this._activeTabIndex - 1);
    }

    if (isNextKey) {
      this._activeTabIndex = this._activeTabIndex === (this._tabs.length - 1) ? 0 : (this._activeTabIndex + 1);
    }

    this.toggle(this._tabs[this._activeTabIndex]);
    this._tabs[this._activeTabIndex].focus();
  }

  toggle(elem) {
    this._activeTab = this._tabs[this._activeTabIndex];
    this._activeTabPanel = this._tabPanels[this._activeTabIndex];

    this._tabs.forEach((tab) => {
      if (this._activeTab.id === tab.id) {
        this.showTab(tab);
      } else {
        this.hideTab(tab);
      }
    });
    this._tabPanels.forEach((tabPanel) => {
      if (this._activeTabPanel.id === tabPanel.id) {
        this.showPanel(tabPanel)
      } else {
        this.hidePanel(tabPanel)
      }
    });
  }

  showTab(elem) {
    elem.classList.add(ACTIVE_CLASS);
    elem.setAttribute('aria-selected', true);
    elem.removeAttribute('tabindex');
    elem.setAttribute('aria-controls', elem.getAttribute('href').replace('#', ''));
  }

  hideTab(elem) {
    elem.classList.remove(ACTIVE_CLASS);
    elem.setAttribute('aria-selected', false);
    elem.setAttribute('tabindex', '-1');
    elem.removeAttribute('aria-controls');
  }

  showPanel(elem) {
    elem.classList.add(ACTIVE_CLASS);
    elem.setAttribute('aria-hidden', false);
  }

  hidePanel(elem) {
    elem.classList.remove(ACTIVE_CLASS);
    elem.setAttribute('aria-hidden', true);
  }
}
