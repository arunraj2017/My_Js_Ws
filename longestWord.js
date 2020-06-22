/*
Longest Word
Have the function LongestWord(sen) 
take the sen parameter being passed and return the largest word in the string. 
If there are two or more words that are the same length, return the first word
 from the string with that length. Ignore punctuation and assume sen will not be empty.
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love

*/
const ALPHAS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function findLongestWord(sen) {
    if (sen.length == 0) {
        return sen;
    }
    let init_counter = 0;
    let charMap = {};
    for (let i = 0; i < sen.length; i++) {
        let chr = sen[i];
        if (!ALPHAS.includes(chr) || (i == sen.length-1)) {
            if(i == sen.length-1){
                i += 1;
            }
            let word = sen.slice(init_counter, i);
            if (word.length > 0) {
                if (!charMap.hasOwnProperty(word.length)) {
                    charMap[word.length] = word;
                }
            }
            init_counter = i+1;
        }
    }

    let wordLength = 0;
   for(let elm in charMap) {
       if(elm > wordLength) {
           wordLength = elm;
       }
   }
   return charMap[wordLength];


}


console.log(findLongestWord('fun&!! time'));