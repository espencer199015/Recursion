/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) return 0;
  const currentLength = words[0].length;
  const maxLengthOfRest = longest(words.slice(1));
  return currentLength > maxLengthOfRest ? currentLength : maxLengthOfRest;
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length <= 1) return str;
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, currentIndex = 0) {
  if (currentIndex === arr.length) return -1;
  if (arr[currentIndex] === val) return currentIndex;
  return findIndex(arr, val, currentIndex + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str === '') return '';
  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) return mid;
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, end);
  return binarySearch(arr, val, start, mid - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};