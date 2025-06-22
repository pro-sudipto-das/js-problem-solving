function createFrequencyCounter() {
  const frequencyCounter = {};

  return function (str) {
    for (let char of str) {
      frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }
    return { ...frequencyCounter };
  };
}

const counter = createFrequencyCounter();
console.log(counter('abc')); // Output come : { a: 1, b: 1, c: 1 }
console.log(counter('mango')); // Output come : { m: 1, a: 1, n: 1, g: 1, o: 1 }
