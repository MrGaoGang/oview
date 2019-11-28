/**
 * 函数节流
 * @param {*} func 
 * @param {*} wait 
 */
export function throttle(func, wait) {
  let timeout = null;
  return function (...args) {
    let context = this;
    if (!timeout) {
      setTimeout(() => {
        func.apply(context, args);
        timeout = null;
      });
    }
  };
}
/**
 * 获取默认宽高
 * @param {*} data 
 */
export function getValue(data) {
  if (typeof data === "number") {
    return data + 'px';
  } else {
    if (data.indexOf("%") == -1 && data.indexOf("px") == -1) {
      return data + 'px';
    }
    return data;
  }
}
