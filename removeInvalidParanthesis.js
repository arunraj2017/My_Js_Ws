/**
 * Remove the minimum number of invalid parentheses in order to 
 * make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
 *
 
 
 solution:
     remove a paranthesis from the string and add it to queue
     remove exactly one paranthesis each on each iteration
its a graph BFS traversal

                                    (a)())()
                                /      \     \
                         a)())()  (a)())() ... (a)())(
 */


function findAllPossibleStrings(str) {
    if (str == null || str.length === 0) {
        return []
    }
    const finalResult = [];
    const queue = [];
    const visited = new Set();
    const parnCollection = ['(', ')'];
    queue.push(str);

    while(queue.length > 0) {
        let queLength = queue.length;
        while(queLength > 0) {
            const currentStr = queue.shift();
            if(isValid(currentStr)) {
                finalResult.push(currentStr);
                continue;
            }
            for(let i=0; i<currentStr.length; i++) {
                if(parnCollection.includes(currentStr[i])) {
                    let tempStr = currentStr.slice(0,i) + currentStr.slice(i+1);
                    if(visited[tempStr]== true){
                        continue;
                    }
                        queue.push(tempStr);
                        visited[tempStr] = true;
                    
                }
            }
            queLength--;

        }

        if(finalResult.length>0)
         return finalResult;
    }

    return [];


}

function isValid(str) {
    let open = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            open++;
        } 
        if (str[i] === ')') {
            if(open===0) {
                return false;
            }
            open--;
        }
    }
    return open === 0;
}

function remove(str, ind) {
    return [...str.split('').slice(0, ind), ...str.split('').slice(ind + 1)].join('')
}



console.log(findAllPossibleStrings('(a)())()'));