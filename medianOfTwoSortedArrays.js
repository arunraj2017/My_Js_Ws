

/**
 * 
 * https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46
 */
function findMedian(arraya, arrayb) {
    
    const total = arraya.length + arrayb.length;
    let midPoint = 0;
    let isEven = false;
    if (total % 2 == 0) {
        isEven = true;
        midPoint = total/2 +1;
    }else{
        midPoint = Math.ceil(total/2)
    }
    const finalArray = [];

    let i = 0, j = 0;
    while (i + j < midPoint) {
        if (arraya[i] <= arrayb[j]) {
            finalArray.push(arraya[i]);
            i++;
        } else {
            finalArray.push(arrayb[j]);
            j++;
        }
    }

    console.log(`Final Array -> ${finalArray}`);
    if(isEven) {
        return (finalArray[midPoint-1] + finalArray[midPoint-2])/2;
    }else{
        return finalArray[midPoint-1];
    }


}

const a = [1,2,5]
const b = [3,4]

console.log(findMedian(a,b))