// Climbing Sytairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if (n < 2) {

        return 1;
    }

    let firstStep = 1;

    let secondStep = 1;

    let thirdStep = 0;

    for (let i=2; i<=n; i++) {

        thirdStep = firstStep + secondStep;

        firstStep = secondStep;

        secondStep = thirdStep;
    }

    return thirdStep;
}

n=5
console.log(climbStairs(n))