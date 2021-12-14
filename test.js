/*[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]

*/

const compare = ([h1,p1], [h2,p2]) => {
    if(h1!== h2) {
        return h2-h1;
    }
    return p1-p2;
}

function repositionArray(nums) {

    nums.sort(compare);
    
    const finalArray = [][];
    
}





repositionArray([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);