
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


function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize(function (n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(10)); // 55


window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  event.returnValue = '';
  alert('Are you sure you want to leave?');
});

