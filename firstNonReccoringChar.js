/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    if(s == null || s.length ==0){
        return -1
    }
    if(s.length ==1){
        return 0;
    }
    const charArr = {};

    for(let i=0; i<s.length; i++) {
            let key = s[i];
            if(key in charArr){
              charArr[key] = charArr[key]+1;
            }else{
                 charArr[key] = 1;

            }
    }

    for(let i=0; i<s.length; i++) {
      let key = s[i];
      if(charArr[key] == 1){
        return i;
      }
    }
    return -1;
}

console.log(firstUniqChar('loveleetcode'));