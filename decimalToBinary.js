/**
 * 
decimal to binary
 */

function convertToBinary(num) {
    const finalArr = [];
    while(num >0) {
      finalArr.push(num % 2);
      num = Math.floor(num/2);
    }
    return finalArr.reverse().join('');
}

console.log( convertToBinary(10))