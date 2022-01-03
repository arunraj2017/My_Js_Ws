class Trie{

    constructor() {
        this.map = {};
        this.word = false;
    }

}



class WordDictionary {
    constructor() {
        this.head = new Trie();
    }

    addWord(word) {

        let curr = this.head;
        for(let i=0;i<word.length;i++) {
            const wrd = word[i];
            if(!curr.map[wrd]) {
               curr.map[wrd] = new Trie();
            }
            curr = curr.map[wrd];
        }
        curr.word = true;
    }
    
    search(word) {
        let curr = this.head;
        return this.recur(word,0,curr);
    }

    recur(word,i, curr) {

            if(i>word.length) {
                return false;
            }
            if(!curr){
                return false;
            }h

            const wrd  = word[i];

            if(i=== word.length-1) {

                if(wrd === '.') {
                    const temp = Object.keys(curr.map)[0];
                    return !temp?false:curr.map[temp].word;
                }else{
                    return !curr.map[wrd]?false:curr.map[wrd].word;
                }
            }

           if(wrd === '.') {
               for(const alph in curr.map) {
                   if(this.recur(word,i+1,curr.map[alph])) {
                       return true;
                   }
               }
               return false;
           } else{
               return this.recur(word, i+1, curr.map[wrd]);
           }

    }
}

const wd  = new WordDictionary();
wd.addWord('dad');
wd.addWord('mad');
wd.addWord('bad')
console.log(wd.search('pad'));
console.log(wd.search('bad'));
console.log(wd.search('.ad'));
console.log(wd.search('b..'));