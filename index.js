
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

const debounceHello = () => console.log('Hello!');
const debouncedLogHello = debounce(logHello, 1000);
setInterval(debouncedLogHello, 500);


function debugDecorator(fn) {
  return function (...args) {
    console.log('Calling function with arguments:', ...args);
    const result = fn(...args);
    console.log('Function returned:', result);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const debugAdd = debugDecorator(add);
debugAdd(2, 3);
