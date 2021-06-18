/*  ============= 1 =============
    * Big O *
    function addUpTo(n) {
      return n * (n + 1) / 2; 
    }

    let timer1 = performance.now();
    addUpTo(1000000000);
    let timer2 = performance.now();

    console.log(`Time Elapsed: ${(timer2 - timer1) / 1000} seconds.`);

    * REFACTORED *
*/
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

/*  ============= 2 =============
    * Frequency Counter (FC) *
    This pattern uses objects or sets to collect values/frequencies of values.
    This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.
*/

/*  ===== Task 1 =====
    Write a function called same, which accepts two arrays. 
    The function should return true if every value in the array has it's corresponding value squared in the second array. 
    The frequency of values must be the same.

    same([1,2,3,4], [4,1,16,9]);
    same([1,2,3], [1,1,9]);
    same([1,2,3], [1,9]);
*/

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);

//         if(correctIndex === -1) return false;
//         arr2.splice(correctIndex, 1); // вирізаємо значення які співпали, щоб зменьшити к-сть перебору
//     }
//     return true;
// } // Time Complexity - N^2

/* REFACTORED */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
} // Time Complexity - O(N)

/*  ===== Task 2 =====
    Write a function called sameFrequency.
    Given two positive integers, find out if the two numbers have the same frequency of digits.
    Your solution MUST have the following complexities: Time: O(N)

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578,5879385) // true
    sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

/*  ===== Task 3 =====
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, and
    checks whether there are any duplicates among the arguments passed in.  
    You can solve this using the frequency counter pattern OR the multiple pointers pattern.

    Your solution MUST have the following complexities: Time - O(n) Space - O(n)
    Bonus: Time - O(n log n) Space - O(1)

    areThereDuplicates(1,2,3); // false
    areThereDuplicates(1,2,2); // true
    areThereDuplicates('a','b','c','a'); //true
*/

// areThereDuplicates Solution (Frequency Counter)
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// Bonus: areThereDuplicates Solution (Multiple Pointers)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

/*  ==========================
    * FC - Anagrams *
    Given two strings, write a function to determine if the second string is an anagram of the first. 
    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

    validAnagram('', ''); // true
    validAnagram('aaz', 'zza'); // false
    validAnagram('anagram', 'nagaram'); // true
    validAnagram("rat","car"); // false)
    validAnagram('awesome', 'awesom'); // false
    validAnagram('qwerty', 'qeywrt'); // true
    validAnagram('texttwisttime', 'timetwisttext'); // true
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let anagram1 = {};
  let anagram2 = {};

  let lowercaseStr1 = str1.toLowerCase();
  let lowercaseStr2 = str2.toLowerCase();

  for (let val of lowercaseStr1) {
    anagram1[val] = ++anagram1[val] || 1;
  }

  for (let val of lowercaseStr2) {
    anagram2[val] = ++anagram2[val] || 1;
  }

  for (let key in anagram1) {
    if (anagram2[key] !== anagram1[key]) return false;
  }

  return true;
} // Time Complexity - O(N)

/* The same: 
  anagram1[val] = ++anagram1[val] || 1; => 
  anagram1[val] = (anagram1[val] || 0) + 1;
  anagram1[val] ? anagram1[val] += 1 : anagram1[val] = 1;
*/

/*  ============= 3 =============
    * Multiple Pointers (MP) *
    Creating pointers or values that correspond to an index or position and move towards the beginning, 
    end or middle based on a certain condition
    Very efficient for solving problems with minimal space complexity as well
*/

/*  ===== Task 1 =====
    Write a function called sumZero which accepts a sorted array of integers. 
    The function should find the first pair where the sum is 0. 
    Return an array that includes both values that sum to zero or undefined if a pair does not exist

    sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
    sumZero([-2,0,1,3]) // undefined
    sumZero([1,2,3]) // undefined
*/

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
//         }
//     }
// } // Time Complexity - O(N^2). Space Complexity - O(1).

/* REFACTORED */

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
} // Time Complexity - O(N). Space Complexity - O(1).

/*  ===== Task 2 =====
    Implement a function called countUniqueValues, which accepts a sorted array, 
    and counts the unique values in the array. 
    There can be negative numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
*/

// function countUniqueValues(arr) {
//     return [...new Set(arr)].length;
// }

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
}

/*  ===== Task 3 ===== Multiple Pointers - averagePair
    Write a function called averagePair. 
    Given a sorted array of integers and a target average, determine if there is a pair of values 
    in the array where the average of the pair equals the target average. 
    There may be more than one pair that matches the average target.

    Bonus Constraints: Time: O(N), Space: O(1)

    averagePair([1,2,3],2.5); // true
    averagePair([1,3,3,5,6,7,10,12,19],8); // true
    averagePair([-1,0,3,4,5,6],4.1); // false
    averagePair([],4); // false
*/

// averagePair Solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

/*  ===== Task 4 ===== Multiple Pointers - isSubsequence
    Write a function called isSubsequence which takes in two strings and checks whether the characters 
    in the first string form a subsequence of the characters in the second string. 
    In other words, the function should check whether the characters in the first string appear 
    somewhere in the second string, without their order changing.

    Your solution MUST have AT LEAST the following complexities: Time Complexity - O(N + M), Space Complexity - O(1)

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order metters)
*/

// isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

/*  ============= 4 =============
    * SLIDING WINDOW (SW) *
    This pattern involves creating a window which can either be an array or number from one position to another
    Depending on a certain condition, the window either increases or closes (and a new window is created)
    Very useful for keeping track of a subset of data in an array/string etc.
*/

/*  ===== Task 1 =====
    Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
    The function should calculate the maximum sum of n consecutive elements in the array.

    maxSubarraySum([1,2,5,2,8,1,5],2) // 10
    maxSubarraySum([1,2,5,2,8,1,5],4) // 17
    maxSubarraySum([4,2,1,6],1) // 6
    maxSubarraySum([4,2,1,6,2],4) // 13
    maxSubarraySum([],4) // null
*/

// function maxSubarraySum(arr, num) {
//   if ( num > arr.length){
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i ++){
//     temp = 0;
//     for (let j = 0; j < num; j++){
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// } // Time Complexity - O(N^2)

/* REFACTORED */

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
} // Time Complexity - O(N)

/*  ===== Task 2 ===== Sliding Window - maxSubarraySum
    Given an array of integers and a number, write a function called maxSubarraySum, 
    which finds the maximum sum of a subarray with the length of the number passed to the function. 

    Note that a subarray must consist of consecutive elements from the original array. 
    In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

    Constraints: Time Complexity - O(N), Space Complexity - O(1)

    maxSubarraySum([100,200,300,400],2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20],4) // 39
    maxSubarraySum([-3,4,0,-2,6,-1],2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3],3) // null
*/

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//     currentTotal += arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }
//   return total;
// }

/*  ===== Task 3 ===== Sliding Window - minSubArrayLen
    Write a function called minSubArrayLen which accepts two parameters - an array of positive integers 
    and a positive integer.
    
    This function should return the minimal length of a contiguous subarray of which the sum is greater 
    than or equal to the integer passed to the function. If there isn't one, return 0 instead.

    Constraints: Time Complexity - O(N), Space Complexity - O(1)

    minSubArrayLen([2,3,1,2,4,3],7) // 2 -> because [4,3] is the smallest subarr
    minSubArrayLen([2,1,6,5,4],9) // 2 -> because [5,4] is the smallest subarr
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19]52) // 1 -> because [62] is gr
*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

/*  ===== Task 3 ===== Sliding Window - findLongestSubstring
    Write a function called findLongestSubstring, which accepts a string 
    and returns the length of the longest substring with all distinct characters.

    Constraints: Time Complexity - O(N)

    findLongestSubstring('') // 0
    findLongestSubstring('rithnschool') // 7
    findLongestSubstring('thisisawesame') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

/*  ============= 5 =============
    * Divide and Conquer (DC) *
    This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
    This pattern can tremendously decrease time complexity
*/

/*  ===== Task =====
    Given a sorted array of integers, write a function called search, 
    that accepts a value and returns the index where the value passed to the function is located. 
    If the value is not found, return -1

    search([1,2,3,4,5,6],4) // 3
    search([1,2,3,4,5,6],6) // 5
    search([1,2,3,4,5,6],11) // -1
*/

// function search(arr, val){
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] === val){
//           return i;
//       }
//   }
//   return -1;
// } // Time Complexity - O(N) - Linear Search

/* REFACTORED */

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
} // Time Complexity - O(Log(N)) - Binary Search!
