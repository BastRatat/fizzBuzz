const fizzBuzz = (number, multipleOne = 3, multipleTwo = 5) => {
  const output = [];
  let i = 1;
  while (i <= number) {
    let temp = '';
    if (i % multipleOne === 0) temp += 'Fizz';
    if (i % multipleTwo === 0) temp += 'Buzz';
    output.push(temp.length === 0 ? i.toString() : temp);
    i += 1;
  }

  return output.length === 0 ? number : output;
};

console.log(fizzBuzz(16));
