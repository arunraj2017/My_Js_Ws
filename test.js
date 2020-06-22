

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));


function mergeSortedArrays(ar1, ar2) {
    let i = 0, j = 0, result = [];
    while (true) {
        if (ar1[i] == undefined && ar1[j] == undefined) {
            return result;
        } else if (ar1[i] == undefined) {
            result.push(ar2[j]);
            ++j;
        } else if (ar2[j] == undefined) {
            result.push(ar1[i]);
            ++i;
        } else if(ar1[i] == ar2[j]) {
            result.push(ar1[i]);
            ++i;
            ++j;
        } 
        else if (ar1[i] < ar2[j]) {
            result.push(ar1[i]);
            ++i;
        } else {
            result.push(ar2[j]);
            ++j;
        }

    }
    //return result;
}