/**
 
(a)())()

 */


 function removeInvalids(input) {
    const visited = new Set();
    const paran = ['(', ')'];
    const queue = [input];
    const finalStr = [];
    let isFound = 0;

    while(queue.length >0) {

        const currentStr = queue.shift();
        if(visited.has(currentStr)) {
           continue;
        }
        visited.add(currentStr);

        if(isValid(currentStr)) {
            finalStr.push(currentStr);
            isFound = true;
            continue;
        }
        if(isFound) {
            continue;
        }

        for(let i=0; i<currentStr.length;i++) {
            if(paran.includes(currentStr[i])) {

                queue.push(currentStr.slice(0,i)+currentStr.slice(i+1));
            }
        }

    }
    return finalStr;

 }

 function isValid(str) {
     let open = 0;
     for(let i=0; i<str.length; i++) {
         if(str[i] === '(') {
             open++;
         }else if(str[i] === ')') {
             if(open<=0) {
                 return false;
             }
             open --;
         }
     }
     return (open === 0)
 }

 console.log(removeInvalids('(a)())()'));