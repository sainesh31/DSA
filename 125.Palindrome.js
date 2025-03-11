function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function palindrome(arr, start, end) {
  if (start >= end) {
    return true;
  }

  //   swap(arr, start, end);
  if (arr[start] !== arr[end]) return false;
  return palindrome(arr, start + 1, end - 1);
}

function checkPalindrome(str) {
  let arr = str.toLowerCase().split("");
  return palindrome(arr, 0, arr.length - 1);
}

let x = checkPalindrome("madam");
console.log(x); // Output: [5, 4, 3, 2, 1]
