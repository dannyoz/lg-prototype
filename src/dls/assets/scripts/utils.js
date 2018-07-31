import { ACTIVE_CLASS, KEY_NAMES } from './constants';

export function setAccessibility({ parent, target, trigger }) {
  if (parent.classList.contains(ACTIVE_CLASS)) {
    target.setAttribute('aria-hidden' , false);
    if (trigger) {
      trigger.setAttribute('aria-expanded', true);
    }
  } else {
    target.setAttribute('aria-hidden', true);
    trigger.setAttribute('aria-expanded', false);
  }
}

export function siblings(el) {
  return el.parentNode.children.length
    ? Array.from(el.parentNode.children).filter((child) => child !== el)
    : [];
}

export function getChildrenByClass(elem, className) {
  return Array.from(elem.childNodes).filter(child =>
    child.nodeType !== Node.TEXT_NODE && child.classList.contains(className));
}

export function hideElement(elem) {
  elem.classList.remove(ACTIVE_CLASS);
  elem.setAttribute('aria-hidden', true);
  return elem;
}

export function showElement(elem) {
  elem.classList.add(ACTIVE_CLASS);
  elem.setAttribute('aria-selected', false);
}

export const isKeyLeft = (event) => event.key === KEY_NAMES.KEY_LEFT || event.key === 'Left' || event.keyIdentifier === 'Left';
export const isKeyUp = (event) => event.key === KEY_NAMES.KEY_UP || event.key === 'Up' || event.keyIdentifier === 'Up';
export const isKeyRight = (event) => event.key === KEY_NAMES.KEY_RIGHT ||event. key === 'Right' || event.keyIdentifier === 'Right';
export const isKeyDown = (event) => event.key === KEY_NAMES.KEY_DOWN || event.key === 'Down' || event.keyIdentifier === 'Down';
export const isKeyEnter = (event) => event.key === KEY_NAMES.KEY_ENTER || event.keyIdentifier === 'Enter';
export const isKeySpace = (event) => event.key === KEY_NAMES.KEY_SPACE ||event. key === ' ' || event.keyIdentifier === 'U+0020';
