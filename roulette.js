function roulette() {
  const numbers = Array.from({ length: 37 }, (_, idx) => idx);
  const randomIndex = Math.floor(Math.random() * numbers.length);
  const result = numbers[randomIndex];
  const color =
    result === 0
      ? 'green'
      : (result % 2 === 0)
        ? 'red'
        : 'black';
  return { number: result, color };
}

console.log(roulette());