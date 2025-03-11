/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
  if (typeof word !== 'string') return false;
  // if (word = '') return true;
  if (word.length <= 1) return true;
  const initialArr = [...word.toLowerCase()];
  const reversedArr = [];

  for (let i = initialArr.length - 1; i >= 0; i--) {
    const elementLower = initialArr[i].toLowerCase();
    reversedArr.push(elementLower);
  }
  return reversedArr.join('') === initialArr.join('');
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  if (typeof sentence !== 'string') return [];
  if (sentence.length === 0) return [];

  const sentenceDevided = sentence.split(' ');
  let longestWord = sentenceDevided[0].length;
  const result = [];

  for (let i = 0; i < sentenceDevided.length; i++) {
    const elementLength = sentenceDevided[i].length;
    if (elementLength >= longestWord) longestWord = elementLength;
  }

  for (let i = 0; i < sentenceDevided.length; i++) {
    const element = sentenceDevided[i];
    if (element.length === longestWord) {
      result.push(element);
    }
  }
  return result;
}

export { isPalindrom, findLongestWords };
