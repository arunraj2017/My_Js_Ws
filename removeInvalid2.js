var removeInvalidParentheses = function(s) {
    if(!s.length) return [''];
    let res = [];
    let queue = [s];
    let visited = [s];
    let found = false;
    
    while(queue.length) {
      const cs = queue.shift();
      if(isValid(cs)) {
        res.push(cs);
        found = true;
      }
      if(found) continue;
      
      for(let i = 0; i < cs.length; i++) {
        const c = cs[i];
        if(c != '(' && c != ')') continue;
        const t = cs.slice(0, i) + cs.slice(i + 1);
        if(!visited.includes(t)) {
          queue.push(t);
          visited.push(t);
        }
      }
    }
    
    return res;
  };
  
  function isValid(s) {
    let counter = 0;
    for(let i = 0; i < s.length; i++) {
      const c = s[i];
      if(c == '(') counter++;
      if(c == ')' && counter-- == 0) return false;
    }
    return counter == 0;
  }



  console.log(removeInvalidParentheses('(a)())()'));