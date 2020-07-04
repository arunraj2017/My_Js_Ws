/**
 * Given arrival and departure times of all trains that reach a railway station, 
 * the task is to find the minimum number of platforms required for the railway 
 * station so that no train waits.
We are given two arrays which represent arrival and 
departure times of trains that stop.


Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}
dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}
Output: 3
Explantion: There are at-most three trains at a time (time between 11:00 to 11:20)

Input: arr[] = {9:00, 9:40}
dep[] = {9:10, 12:00}
Output: 1
Explantion: Only one platform is needed.
 */

function findMinTimes(arrival, departure){
    arrival.sort((a,b)=>a-b);
    departure.sort((a,b)=>a-b);
    let j = 0;
    let platforms = 0;
    for(let i = 0; i<arrival.length; i++) {
        if(arrival[i] < departure[j]) {
            platforms++;
        }else{
            j++;
        }
    }
    return platforms;
}

console.log(findMinTimes([9, 9.40], [9.10,12]));






  