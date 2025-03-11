function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    var j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j - 1, j);
      j--;
    }
  }
}

// Example Usage
let arr = [12, 11, 13, 5, 6];
insertionSort(arr); // Output: [5, 6, 11, 12, 13]
console.log(arr);
