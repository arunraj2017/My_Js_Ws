/**
 * 
 * two inputs
 * s => string
 * p => pattern
 * 
 * output 
 * true/false
 * 
 * constraints: 
 * 1.  a-z which stands for itself
 * 2.  .  matches any character
 * 3.  *  0 or more occurrence of prev character
 * 
 * s = aba p = ab    false
 * s = aa  p = a*    false
 * s = ab  p = .*    true
 * s = ab  p = .     false
 * s = aab p = c*a*b true
 * s = aaa p = a*    true
 * s = aaabc p = a*
 * 
 */
/*

aab
  |
c*a*b
   | 

*/

function checkRegex(s, p) {
    if (s.length === 0 || p.length === 0) {
        return false;
    }

    let i = s.length - 1, j = p.length - 1, isMatch = false;

    while (i >= 0 && j>=0) {
        if (p[j] === s[i] || p[j] === '.') {
            isMatch = true;
            i--;j--;
        }else if(p[j]=== '*') {
            if(p[j-1] === '.') {
                if(p[j-2] == null) {
                    isMatch = true
                    break;
                }else{
                    const tempV = p[j-2];
                    for(let k = i; k>=0; k--) {
                        if(tempV === s[k]) {
                            i = k;
                        }
                    }
                    if( s[i] === p[j-2] ) {
                        isMatch = true;
                        i--;j--;                    
                    }else{
                        isMatch = false;
                        break;
                    }
                }
            }else{
                //dp*s
                //aredre ppppppp s
                
                const tempVar = p[j-1];
                for(let k=i; k>=0; k--) {
                    if(s[i] !== tempVar) {
                        i = k;
                        break;
                    }
                }
                j -=2;
            } 
        }else{
            isMatch = false;
            break;
        }

    }




    return isMatch;

}


console.log(checkRegex('aab', 'a*b'));