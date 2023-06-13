const digitLength = (num) => (Math.log(num) * Math.LOG10E + 1) | 0;
const shorter = (num) => (num % 1 !== 0 ? num.toFixed(2) : num + ".00");
export function numberConverter(number) {
  let compiledNumber = number;
  let shortedNumber = shorter(compiledNumber);

  let letters = ["K", "M", "B", "T", "Q", "A", "B", "C"];
  let zeros = digitLength(compiledNumber) - 1;
  if (zeros < 3) return shortedNumber;

  let symbol = letters[Math.floor(zeros / 3) - 1];
  let divider = +("1" + "0".repeat(Math.floor(zeros / 3) * 3));

  return shorter(compiledNumber / divider) + symbol;
}
