
const sumToNIterative = (n: number): number => {
  let sum = 0;
  
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  } else {
    for (let i = -1; i >= n; i--) {
      sum += i;
    }
  }

  return sum;
};
// Time Complexity: O(|N|)  This solution iterate from 1 to n.
// Space Complexity:  O(1) The amount of extra space used does not grow based on N. It remains constant

// Test cases
console.log("sumToNIterative:",sumToNIterative(5));  // Output: 15  (1 + 2 + 3 + 4 + 5)
console.log("sumToNIterative:",sumToNIterative(-5)); // Output: -15 (-1 -2 -3 -4 -5)
console.log("sumToNIterative:",sumToNIterative(0));  // Output: 0


const sumToN = (N: number): number => {
  if (N > 0) {
    return (N * (N + 1)) / 2;
  } else if (N < 0) {
    const tempN = -N;
    return (-tempN * (tempN + 1)) / 2;
  } else {
    return 0;  // Sum to 0 is 0
  }
};
// Time Complexity: O(1)  This solution uses a  mathematical formula does not use loops or recursion.
// Space Complexity:  O(1) The amount of extra space used does not grow based on N. It remains constant
//Test cases
console.log("sumToN:",sumToN(5));   // Output: 15
console.log("sumToN:",sumToN(-5));  // Output: -15
console.log("sumToN:",sumToN(0));   // Output: 0

const sumToNBitwise = (N: number): number => {
  if (N > 0) {
    return (N + 1) * N >> 1;  
  } else if (N < 0) { 
    const tempN = -N;
    return  -((tempN * (tempN + 1)) >> 1);
  }
  return 0;  // Sum to 0 is 0
};

// Time Complexity: O(1)  This solution uses a mathematical formula and Bitwise operations are constant time operations.
// Space Complexity:  O(1) The amount of extra space used does not grow based on N. It remains constant
// Test cases 
console.log("sumToNBitwise:",sumToNBitwise(5));   // Output: 15
console.log("sumToNBitwise:",sumToNBitwise(-5));  // Output: -15
console.log("sumToNBitwise:",sumToNBitwise(0));   // Output: 0


