///MORE BONUS Questions
var str = 'The quick brown fox jumped over the lazy dog'

function longestWord(str) {
  var splitStr = str.split(' ');
  var longestWord;
  var longestLength = splitStr.reduce(function(longerLength, word) {
    if (word.length > longerLength) {
      longestWord = word;
      longerLength = word.length;
    }
    return longerLength;
  }, 0)
  return longestWord;
}

console.log(longestWord(str))



var arrOfArr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]

function largest(array) {
  return array.reduce(function(memo, num) {
    if (num > memo) {
      memo = num;
    }
    return memo;
  })
}

var reduced = arrOfArr.reduce(function(memoArr, arr) {
  memoArr.push(largest(arr))
  return memoArr;
}, [])

console.log(reduced)


////FUNCTIONS LAB
//Long Questions
//Question 1
function lengths(arr) {
  return words.map(str => str.length);
}
var words = ['hello', 'what', 'is', 'up', 'dude'];

console.log(lengths(words)); //[5,4,2,2,4]

//Question 2
function transmogrifer(a, b, c) {
  var product = a * b;
  var transmogrified = Math.pow(product, c);
  return transmogrified;
}

console.log(transmogrifer(2, 2, 3)); //64

//Question 3

function wordReverse(str) {
  var splitStr = str.split(' ');
  var strArr = [];
  for (var i = splitStr.length - 1; i >= 0; i--) {
    strArr.push(splitStr[i]);
  }
  return strArr.join(' ');
}

console.log(wordReverse('Put Hans back on the line')); //'line the on back Hans Put'

//Short Questions
//Q1
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}
console.log(maxOfTwoNumbers(10, 5)); //10

//Q2
function maxOfThree(a, b, c) {
  return maxOfTwoNumbers(a, maxOfTwoNumbers(b, c));
}
console.log(maxOfThree(1, 2, 3)) //3

//Q3
function isCharacterAVowel(char) {
  vowels = ['a', 'e', 'i', 'o', 'u']
  var matched = vowels.filter(vowel => vowel === char.toLowerCase());
  return matched.length >= 1 ? true : false;
}

console.log(isCharacterAVowel('A')); //true
console.log(isCharacterAVowel('x')); //false

//Q4
function sumArray(arr) {
  return arr.reduce((a, b) => a + b);
}

function multiplyArray(arr) {
  return arr.reduce((a, b) => a * b);
}

//Q5
function numOfArgs() {
  return arguments.length;
}

//Q6
function reverseString(str) {
  var splitted = str.split('');
  for (var i = 0, j = splitted.length - 1; i < j; i++, j--) {
    let memo = splitted[i];
    splitted[i] = splitted[j]
    splitted[j] = memo;
  }
  return splitted.join('');
}

console.log(reverseString('gnirts esrever')); // 'reverse string'

//Q7
function findLongestWord(arr) {
  return arr.reduce(function(longestWord, word) {
    if (word.length > longestWord.length) {
      longestWord = word.length;
    }
    return length;
  }, '')
}

console.log(findLongestWord(['chicken', 'duck', 'rooster', 'ostrich']))

//Q8
function filterLongWords(arr, x) {
  return arr.reduce(function(arr, word) {
    if (word.length > x) {
      arr.push(word);
    }
    return arr;
  }, [])
}
console.log(filterLongWords(['say', 'my', 'name'], 2)); //['say','name']


//Bonus1
String.prototype.reverseString = function() {
  return reverseString(this);
};

console.log('General Assembly'.reverseString());

//Bonus2
function objectify(str) {
  var splitted = str.toLowerCase().split('').sort();
  return splitted.reduce(function(finalObj, letter, idx, arr) {
    if (letter !== ' ') {
      numOfOccurences = arr.filter(a => a === letter).length;
      finalObj[letter] = numOfOccurences;
    }
    return finalObj;
  }, {})
}

console.log(objectify("General Assembly"))
