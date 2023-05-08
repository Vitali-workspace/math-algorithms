
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

const logHello = () => console.log('Hello!');
const throttledLogHello = throttle(logHello, 1000);
setInterval(throttledLogHello, 500);


function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = undefined;
    }, delay);
  };
}


