// function printName(name, n) {
//   if (n <= 0) {
//     return;
//   }
//   console.log(name);
//   printName(name, n - 1);
// }

// // Example usage:
// printName("John Doe", 5);

// function printName(i, n) {
//   if (i > n) {
//     return;
//   }

//   console.log("John Doe");
//   printName(i + 1, 5);
// }

// // Example usage:
// printName(1, 5);

// function printNNumbers(i, n) {
//   if (i < n) {
//     return;
//   }

//   //   console.log("John Doe");
//   console.log(i);
//   printNNumbers(i - 1, n);
//   i--;
// }

// // Example usage:
// printNNumbers(5, 5);

// function SumofNNumbers(i, sum) {
//   if (i <= 0) {
//     return sum;
//   }
//   sum += i;
//   return SumofNNumbers(i - 1, sum);
// }
// var sum = 0;
// var result = SumofNNumbers(10, 0);
// console.log(result);

// function factorial(n) {
//   // Base case: factorial of 0 or 1 is 1
//   if (n === 0 || n === 1) {
//     return 1;
//   }

//   // Recursive case: n * factorial of (n-1)
//   return n * factorial(n - 1);
// }

// // Example usage:
// let number = 5;
// console.log(`Factorial of ${number} is ${factorial(number)}`); // Output: 120

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function reverseArray(arr, start, end) {
  if (start >= end) {
    return;
  }
  swap(arr, start, end);
  reverseArray(arr, start + 1, end - 1);
}

function reverseNumber(arr) {
  reverseArray(arr, 0, arr.length - 1);
  return arr;
}

let x = reverseNumber([1, 2, 3, 4, 5]);
console.log(x); // Output: [5, 4, 3, 2, 1]
