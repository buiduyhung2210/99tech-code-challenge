
const sumToNIterative = (n: number) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};


// Example Usage
console.log(sumToNIterative(5));


const sumToN = (N: number): number => {
  if (N > 0) {
    return (N * (N + 1)) / 2;
  } else if (N < 0) {
    const tempN = -N;
    return (1 + tempN * (tempN + 1)) / 2 * -1;
  } else {
    return 0;  // Sum to 0 is 0
  }
};

// Example Usage
console.log(sumToN(5));   // Output: 15
console.log(sumToN(-5));  // Output: -15
console.log(sumToN(0));   // Output: 0