var decodeString = function(s) {
    
    const solve = (i) => {
        let str = '';
        while(i<s.length) {
            const cval = s[i];
            if(!isNaN(cval)) {
                let tempi = i;
                while(!isNaN(s[i])) {
                    i++
                }
                let d = parseInt(s.substring(tempi,i));
                let iii = i;
                while(d>0) {
                    let [temps, ii] =  solve(i+1);
                    str +=  temps;
                    iii = ii;
                    d--;
                }
                i = iii+1;
            } else if(cval === ']') {
                return [str,i];
            }else {
                str += cval;
                i++;
            }
            
        }
        return [str,i];
        
    }

    return solve(0);
    
};

console.log(decodeString('2[abc]3[cd]ef'))
//3[bc2[d]]

