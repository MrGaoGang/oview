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

export function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
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
