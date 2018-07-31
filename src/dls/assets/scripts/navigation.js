import { siblings, setAccessibility } from './utils.js';
import { ACTIVE_CLASS, ICON_CLASSES } from './constants';

const { ICON, ICON_DOWN_CHEVRON, ICON_UP_CHEVRON } = ICON_CLASSES;
const headerEl = document.querySelector('.dls-header');
const menuButton = document.querySelector('.dls-menu-button');
const navItems = document.querySelectorAll('.dls-navigation button, .dls-navigation a');
const navItemList = document.getElementById('primary-nav');

function toggleNav(el) {
  el.parentNode.classList.toggle(ACTIVE_CLASS);

  setAccessibility({
    trigger: el,
    parent: el.parentNode,
    target: siblings(el)[0]
  });
};

function toggleIcons(el) {
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

export function setActive(id) {
  const sectionNavs = document.querySelectorAll('.dls-section-nav');
  const sectionNav = document.getElementById(`${id}-section-nav`);
  const navItem = document.getElementById(`${id}-nav-item`);

  Array.from(sectionNavs).forEach((e, i) => e.classList.remove(ACTIVE_CLASS));
  Array.from(navItems).forEach((e, i) => e.classList.remove(ACTIVE_CLASS));

  navItem.classList.toggle(ACTIVE_CLASS);

  if (navItem.tagName === 'A') {
    const navItemParent = navItem.closest('ul');
    const navItemParentToggle = siblings(navItemParent)[0];

    if (!navItemParent.parentNode.classList.contains(ACTIVE_CLASS)) {
      toggleNav(navItemParent);
      toggleIcons(navItemParentToggle);
    }
  }

  if (sectionNav) {
    sectionNav.classList.toggle(ACTIVE_CLASS);
  }
};

export function init() {
  // Toggling the primary navigation and opening content sections
  navItemList.addEventListener('click', ({ target }) => {
    if (target.tagName !== 'A') {
      const targetEl = target.closest('button');
      toggleNav(targetEl);
      toggleIcons(targetEl);
    }
  });

  menuButton.addEventListener('click', () => {
    headerEl.classList.toggle(ACTIVE_CLASS);

    setAccessibility({
      trigger: menuButton,
      parent: headerEl,
      target: document.querySelector('.dls-navigation')
    });
  });
};
