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

  on(eventType, handler) {
    this.$el.addEventListener(eventType, handler);
  }

  off(eventType, handler) {
    this.$el.removeEventListener(eventType, handler);
  }

  get data() {
    return this.$el.dataset;
  }

  id(parse) {
    if (parse) {
      const parsed = this.data.id.split(':');
      return {
        row: +parsed[0],
        col: +parsed[1]
      };
    }
    return this.data.id;
  }

  setStyle(value) {
    this.$el.style.cssText = value;
  }

  css(styles = {}) {
    Object.keys(styles)
        .forEach(key => this.$el.style[key] = `${styles[key]}`);
  }

  addClass(className) {
    this.$el.classList.add(className);
  }

  rmClass(className) {
    this.$el.classList.remove(className);
  }

  find(selector) {
    return $(this.$el.querySelector(selector));
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  closest(selector) {
    return $(this.$el.closest(selector));
  }

  getCoordinats() {
    return this.$el.getBoundingClientRect();
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appenChild(node);
    }

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
