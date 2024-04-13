var kSimilarity = function(A, B) {
    let queue = [];
    let visited = new Set();
    let steps = 0;
    
    queue.push(A);
    visited.add(A);
    
    while (queue.length !== 0) {
        const size = queue.length ; 
        
        for (let i = 0; i < size; i++) {
            let currStr = queue[i];
            
            if (currStr === B) {
                return steps;
            }
            
            const neighbors = getNeighborStrs(currStr, B);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }
        
        steps++;
        queue.splice(0, size);
    }
    
    return -1;
};

const getNeighborStrs = (currStr, B) => {
    let neighbors = [];
    let i = 0;
    
    while (i < currStr.length) {
        if (currStr[i] !== B[i]) {
            break;
        }
        i++;
    }
    
    for (let j = i+1; j < currStr.length; j++) {
        if (currStr[j] === B[i]) {
            neighbors.push(swap(currStr, i, j));
        }
    }
    
    return neighbors;
} 

const swap = (str, i, j) => {
    let strArr = str.split('');
    let temp = strArr[i]; 
    strArr[i] = strArr[j]; 
    strArr[j] = temp;
    return strArr.join('');
}

s1 ="abcde"
s2 ="baecd"

console.log(kSimilarity(s1,s2))