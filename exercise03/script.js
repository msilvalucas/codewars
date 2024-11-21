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
