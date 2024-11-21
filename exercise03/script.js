/**
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 */

function order(words) {
  if (typeof words === 'string' && words.length === 0) {
    return '';
  }

  const result = words
    .split(' ')
    .sort((a, b) => {
      const numA = a.match(/\d/)[0];
      const numB = b.match(/\d/)[0];

      return numA - numB;
    })
    .join(' ');

  return result;
}

console.log(order('silva4 matheus2 gomes3 lucas1')); // Return lucas1 matheus2 gomes3 silva4
