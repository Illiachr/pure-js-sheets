/* eslint-disable require-jsdoc */
class Dom {
  constructor(selector) {
    // #app
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this; // возвращаем this чтобы можно было делать chain
    }

    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);

  if (classes) {
    el.classList.add(classes);
  }

  return $(el);
};