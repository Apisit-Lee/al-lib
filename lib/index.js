'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * 判断是否包含class值
 * @param {String} source 
 * @param {String} target 
 */
const _contain = (source, target) => new RegExp('\s?' + target + '\s?', 'gim').test(source);
/**
 * 判断是否是DOM元素
 */


const isDOM = typeof HTMLElement === 'object' ? obj => obj instanceof HTMLElement : obj => obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
/**
 * 判断DOM元素是否有某class名
 * @param {HTMLElement} el DOM元素
 * @param {String} cls class名
 */

const hasClass = (el, cls) => {
  if (!isDOM(el)) {
    return console.error('[Type error] el should be instance of HTMLElement.');
  }

  return _contain(el.getAttribute('class'), cls);
};
/**
 * 为DOM元素添加class名
 * @param {HTMLElement} el DOM元素
 * @param {String} cls class名
 */


const addClass = (el, cls) => {
  if (!hasClass(el, cls)) {
    el.setAttribute('class', el.getAttribute('class') + ' ' + cls);
  }
};

const removeClass = (el, cls) => {
  if (hasClass(el, cls)) {
    el.setAttribute('class', el.getAttribute('class').replace(new RegExp('\s?' + target + '\s?', 'gim'), ' '));
  }
};

var index = {
  isDOM,
  hasClass,
  addClass,
  removeClass
};

exports.default = index;
//# sourceMappingURL=index.js.map
