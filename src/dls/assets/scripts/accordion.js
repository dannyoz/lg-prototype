import { ACTIVE_CLASS, ICON_CLASSES } from './constants';
import { isKeyEnter, isKeySpace, getChildrenByClass } from './utils';

const defaults = {
  toggleClass: 'accordion-toggle',
  contentClass: 'accordion-content',
  initialToggleIndex: 0
};

export default class Accordion {
  constructor(elem, options) {
    this._options = Object.assign({}, defaults, options);

    this._activeToggleIndex = this._options.initialToggleIndex;
    this._toggleElems = getChildrenByClass(elem, this._options.toggleClass);

    // Only initialise tabs if there are any
    if (this._toggleElems) {
      this._contentElems = getChildrenByClass(elem, this._options.contentClass);
      this._activeToggle = this._toggleElems[this._activeToggleIndex];
      this._elem = elem;

      this.onClick = this.onClick.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);
      this.init();
    }
  }

  init() {
    this._elem.addEventListener('click', this.onClick);
    this._elem.addEventListener('keyup', this.onKeyUp);
    this._elem.addEventListener('keydown', this.onKeyDown);
  }

  onClick(event) {
    event.preventDefault();

    const toggleNode = event.target.closest(`.${this._options.toggleClass}`);

    if (!!toggleNode) {
      this.toggle(toggleNode);
    }
  }

  onKeyDown(event) {
    if (isKeySpace(event)) {
      event.preventDefault();
    }
  }

  onKeyUp(event) {
    const isToggleKey = isKeyEnter(event) || isKeySpace(event);

    if (isToggleKey) {
      this.toggle(event.target);
      return false;
    }
  }

  toggle(el) {
    const isActive = el.classList.contains(ACTIVE_CLASS);

    this._activeToggle = el;

    if (isActive) {
      this.close(this._activeToggle)
    } else {
      this.open(this._activeToggle);
    }

    this._contentElems.forEach(contentElem => {
      const targetId = this._activeToggle.getAttribute('aria-controls');
      if (targetId === contentElem.id) {
        if (isActive) {
          this.hideContent(contentElem);
        } else {
          this.showContent(contentElem);
        }
      }
    });
  }

  toggleIcon(el) {
    const { ICON, ICON_DOWN_CHEVRON, ICON_UP_CHEVRON } = ICON_CLASSES;
    const icon = el.querySelector(`.${ICON}`);
    if (!icon) return;

    if (icon.classList.contains(ICON_UP_CHEVRON)) {
      icon.classList.remove(ICON_UP_CHEVRON);
      icon.classList.add(ICON_DOWN_CHEVRON);
    } else if (icon.classList.contains(ICON_DOWN_CHEVRON)) {
      icon.classList.remove(ICON_DOWN_CHEVRON);
      icon.classList.add(ICON_UP_CHEVRON);
    }
  }

  open(elem) {
    elem.classList.add(ACTIVE_CLASS);
    elem.setAttribute('aria-selected', true);
    elem.setAttribute('aria-expanded', true);
    this.toggleIcon(elem);
  }

  close(elem) {
    elem.classList.remove(ACTIVE_CLASS);
    elem.setAttribute('aria-selected', false);
    elem.setAttribute('aria-expanded', false);
    this.toggleIcon(elem);
  }

  showContent(elem) {
    elem.classList.add(ACTIVE_CLASS);
    elem.setAttribute('aria-hidden', false);
  }

  hideContent(elem) {
    elem.classList.remove(ACTIVE_CLASS);
    elem.setAttribute('aria-hidden', true);
  }
}
