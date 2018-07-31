import 'babel-polyfill';
import 'element-closest';
import 'classlist-polyfill';
import Prism from 'prismjs';
import { init as initNavigation, setActive } from './navigation';
import { router } from './router';
import { setAccessibility } from './utils';
import Tabs from './tabs';
import Accordion from './accordion';
import { ACTIVE_CLASS } from './constants';
import keyboardFocus from 'keyboard-focus';

const panelElems = document.querySelectorAll('.dls-panel');
const tabElems = document.querySelectorAll('.tab-container');
const accordionElems = document.querySelectorAll('.accordion');
const errorSummaryElem = document.querySelector('.form-error-summary');
const formElems = document.querySelectorAll('.form');

function toggleSection({ section }) {
  const sectionEl = document.getElementById(section);

  if (sectionEl) {
    setActive(section);

    Array.from(panelElems).forEach((e, i) => {
      e.classList.remove(ACTIVE_CLASS);
      e.setAttribute('aria-hidden' , true);
    });

    sectionEl.classList.toggle(ACTIVE_CLASS);

    setAccessibility({
      parent: sectionEl,
      target: sectionEl
    });

    sectionEl.focus();

    window.scroll(0, 0);
  }
}

// Activate focus only on keyboard event
keyboardFocus(document);

// Setting up whitespace normalizer for the markup
Prism.plugins.NormalizeWhitespace.setDefaults({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true
});

// Initialise any tabs
Array.from(tabElems).forEach((el) => new Tabs(el));
Array.from(accordionElems).forEach((el) => new Accordion(el));

// Make error summary buttons clickable
errorSummaryElem.addEventListener('click', (event) => {
  event.preventDefault();

  const { target } = event;

  if (target.type === 'button') {
    const targetId = target.getAttribute('data-target');
    const input = document.getElementById(targetId);
    input.focus();
  }
});

// Disable form submissions
Array.from(formElems).forEach((el) => {
  el.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

initNavigation();

router
  .on({
    ':section': toggleSection,
    '*': () => router.navigate('')
  })
  .resolve();
