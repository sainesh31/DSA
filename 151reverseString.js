// function swap(arr, a, b) {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }

// function reverseArray(arr, start, end) {
//   if (start >= end) {
//     return;
//   }
//   swap(arr, start, end);
//   reverseArray(arr, start + 1, end - 1);
// }

// function reverseString(s) {
//   let arr = s.trim().split(/\s+/);
//   console.log(arr);
//   reverseArray(arr, 0, arr.length - 1);
//   return arr.join(" ");
// }

// // Example usage
// const input = reverseString("a good example");
// console.log(input);

// // 2
// // function reverseString(s) {
// //   // Split the string into words
// //   let arr = s.split(" ");
// //   // Reverse the array of words
// //   arr.reverse();
// //   // Join the array back into a string with spaces
// //   return arr.join(" ");
// // }

// // // Example usage
// // const input = reverseString("a good example");
// // console.log(input); // Output: "example good a"

const originalArray = [
  { name: "John", details: { age: 30 } },
  { name: "Alice", details: { age: 25 } },
];

const newArray = originalArray.map((obj) => {
  return { ...obj }; // Shallow copy each object
});

newArray[0].name = "Bob";

console.log(originalArray); // Output: [{ name: 'John' }, { name: 'Alice' }]
console.log(newArray); // Output: [{ name: 'Bob' }, { name: 'Alice' }]
