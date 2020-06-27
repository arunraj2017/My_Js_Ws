/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) {
        return false;
    }
    if(s === "") {
        return true;
    }

    const stack = [];
    let top = 0;
    for(let i = 0; i<s.length; i++) {
        if(s[i] === ""|| s[i]===" ") {
            continue;
        }
        if((stack[top-1] != null) && (parnMap[s[i]] === stack[top-1])) {
            stack.pop();
            top--;
        }else{
            stack.push(s[i]);
            top++;
        }
    }
    
    if(stack.length === 0) {
        return true;
    }else{
        return false;
    }
    
};

const parnMap = {
   // '(' : ')',
    ')' : '(',
   // '[' : ']',
    ']' : '[',
   // '{' : '}',
    '}' : '{'
}

console.log(isValid('()[] {}'));