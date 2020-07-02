/**
 * 
 * question : 
 * given NxN array
 * [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ]
 * 
 * 
 * output:
 * 
 * [
 * [7,4,1],
 * [8,5,2],
 * [9,6,3]
 * ]
 */

/*
solution
 [1 2 3 4]                       [1 4 7 1]                     [1 7 4 1]
 [4 5 6 4]   => swap diagonals   [2 5 8 2]   => mirror array   [2 8 5 2]
 [7 8 9 4]                       [3 6 9 3]                     [3 9 6 3]
 [1 2 3 4]                       [4 4 4 4]                     [4 4 4 4]
*/


function rotateArray(ary) {
    if(ary.length === 0) {
        return [[]];
    }
    for(let i = 0; i< ary.length; i++) {
         for(let j =i; j <ary[i].length; j++) {
             let temp = ary[i][j];
             ary[i][j] = ary[j][i];
             ary[j][i] = temp;
         }

    }
    for(let i=0;i<ary.length;i++){
       let p=0,q=ary[i].length-1;
       while(p<=q) {
           let temp = ary[i][p];
           ary[i][p] = ary[i][q];
           ary[i][q] = temp;
           p++;q--;
       }
       
    }

    
}

function printArray(ary) {
    for(let i=0; i<ary.length;i++){
     console.log(ary[i]);
    }
}

let input = [
    [1,2,3,4],
    [4,5,6,4],
    [7,8,9,4],
    [1,2,3,4]
];
rotateArray(input);
printArray(input);