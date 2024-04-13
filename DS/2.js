/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let hash = {};
    let count = 0;
    
    for(let i=0; i<rings.length; i+=2){
        
        let temp = rings[i]+rings[i+1];
        let temp2 = rings[i+1];

        console.log(hash)
        
        if(!hash[temp]){
            hash[temp] = 1;
            
            if(hash["R"+temp2] && hash["G"+temp2] && hash["B"+temp2]){
                count++;
            }
        }
    }
    return count;
};

s = "B0B6G0R6R0R6G9"
console.log(countPoints(s))