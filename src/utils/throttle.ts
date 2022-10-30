export default function throttle<T>(fn: (...args: T[]) => void, delay = 500) {
  let timer = null;

  return function (...args: T[]) {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
}
