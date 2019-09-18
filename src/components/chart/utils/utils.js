/**
 * 函数节流
 * @param {*} func 
 * @param {*} wait 
 */
export function throttle(func, wait) {
  let timeout = null;
  return function(...args) {
    let context = this;
    if (!timeout) {
      setTimeout(() => {
        func.apply(context, args);
        timeout = null;
      });
    }
  };
}
