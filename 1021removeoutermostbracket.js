function removeOuterParentheses(s) {
  debugger;
  let result = "";
  let depth = 0;

  for (let char of s) {
    if (char === "(") {
      if (depth > 0) {
        result += char;
      }
      depth++;
    } else if (char === ")") {
      depth--;
      if (depth > 0) {
        result += char;
      }
    }
  }
  return result;
}

// Example usage
const input = ["(()())(())", "(()())(())(()(()))", "()()"];
const output = input.map(removeOuterParentheses);

console.log(output); // Output: ["()()()", "()()()()(())", ""]
