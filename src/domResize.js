// <HTMLElement, Set<Function>>
const callbackMap = new WeakMap();
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const box = entry.borderBoxSize[0];
    const boxSize = { width: box.inlineSize, height: box.blockSize };
    /** @type {Set} */
    const fns = callbackMap.get(entry.target);
    if (fns) {
      requestAnimationFrame(() => {
        fns.forEach((fn) => typeof fn === "function" && fn(boxSize));
      });
    }
  }
});

// domResize.on(dom, fn)
// domResize.off(dom, fn)
// domResize.clean(dom)
export default {
  /**
   * 监听DOM的尺寸变化
   * @param {HTMLElement} dom 监听的dom元素
   * @param {({width:number,height:number}) => void} fn dom尺寸变化后的回调函数
   * @returns {void}
   */
  on: (dom, fn) => {
    if (!(dom instanceof HTMLElement) || typeof fn !== "function") return;
    if (!callbackMap.has(dom)) {
      callbackMap.set(dom, new Set());
      resizeObserver.observe(dom);
    }
    /** @type {Set} */
    const fnSet = callbackMap.get(dom);
    if (fnSet.has(fn)) return;
    fnSet.add(fn);
  },

  /**
   * 移除某个监听函数
   * @param {HTMLElement} dom 监听的dom元素
   * @param {({width:number,height:number}) => void} fn dom尺寸变化后的回调函数
   * @returns {void}
   */
  off: (dom, fn) => {
    if (!(dom instanceof HTMLElement) || typeof fn !== "function" || !callbackMap.has(dom)) return;
    /** @type {Set} */
    const fnSet = callbackMap.get(dom);
    fnSet.delete(fn);
    if (fnSet.size === 0) {
      callbackMap.delete(dom);
      resizeObserver.unobserve(dom);
    }
  },

  /**
   * 移除所有监听函数
   * @param {HTMLElement} dom 监听的dom元素
   * @returns {void}
   */
  clean: (dom) => {
    if (!(dom instanceof HTMLElement) || typeof fn !== "function" || !callbackMap.has(dom)) return;
    callbackMap.delete(dom);
    resizeObserver.unobserve(dom);
  },
};
