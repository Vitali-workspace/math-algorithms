
function throttle(fn, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = undefined;
    }, delay);
  };
}

