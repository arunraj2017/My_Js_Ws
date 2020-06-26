/**
 * @param {number} numRows
 * @return {number[][]}
 
  [1]
  [1,1]
  [1,2,1]
  [1,3,3,1]
 */
var generate = function(numRows) {
    if(numRows === 0) {
        return null;
    }
    if(numRows === 1){
        return [[1]];
    }
    let result = [[1]];
    for(let i = 1; i<numRows; i++ ){
        result[i] = [];
        for(let j = 0; j<i+1;j++ ){
            if(j!==0 && j!==i){
                result[i][j] = result[i-1][j-1] + result[i-1][j];
                
            }else{
                result[i][j]=1;
            }
        }
    }
    
    return result;
};

console.log(generate(5));