TC-- > O(n ^ 2);
// function swap(arr, xp, yp) {
//   var temp = arr[xp];
//   arr[xp] = arr[yp];
//   arr[yp] = temp;
// }

// function bubbleSort(arr, n) {
//   debugger;
//   for (i = n - 1; i >= 1; i--) {
//     for (j = 0; j <= i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
// }

// var arr = [64, 25, 12, 22, 11];
// var n = arr.length;
// bubbleSort(arr, n);
// console.log("Sorted array: ", arr);

// TC-- > O(n); for below

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort(arr, n) {
  var swapped;
  for (var i = n - 1; i >= 1; i--) {
    swapped = false;
    for (var j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    // If no elements were swapped, the array is already sorted
    if (!swapped) break;
  }
}

var arr = [64, 25, 12, 22, 11];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ", arr);
