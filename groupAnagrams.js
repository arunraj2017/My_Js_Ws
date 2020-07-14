/**
 * 
 * Given an array of strings, group anagrams together.
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 */

function groupAnagrams(strings) {
    const charMap = {};
    const finalArr = [];
    for (let i = 0; i < strings.length; i++) {
        let tstr = getSortedString(strings[i]);
        if(!charMap[tstr]) {
            charMap[tstr] = [];
        }
        charMap[tstr].push(strings[i]);

    }

    for(let item in charMap) {
        finalArr.push(charMap[item]);
    }

    return finalArr;

}

function getSortedString(string) {
    return string.split('').sort().join('');
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))