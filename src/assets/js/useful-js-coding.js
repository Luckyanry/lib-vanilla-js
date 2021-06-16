// ***** Useful JavaScript Coding Techniques That You Should Use *****

/* ===== 1. Get the last element of an array =====

let numbersArr = [4, 8, 9, 34, 100];
numbersArr[numbersArr.length - 1]; //return 100
*/

/* ===== 2. Random number in a specific range =====

Math.floor(Math.random() * 5); // Random number between 0 and 4.
Math.floor(Math.random() * 50); // Random number between 0 and 49.
Math.floor(Math.random() * 310); // Random number between 0 and 309.
*/

/* ===== 3. Flattening multi-dimensional array =====
The method flat() takes one single argument that defines how deep we want 
to flatten an array(level of flattening).

let arr = [5, [1, 2], [4, 8]];
arr.flat(); //returns [5, 1, 2, 4, 8]

let twoLevelArr = [4, ['John', 7, [5, [9]]]];
twoLevelArr.flat(3); //returns [4, "John", 7, 5, 9]
*/

/* ===== 4. Check for multiple conditions =====
When we want to check for multiple conditions in one IF statements, it’s 
always better to use the array method includes() to handle that.

let name = 'John';

if (name === 'John' || name === 'Ben' || name === 'Chris') {
  console.log('included');
} //Bad way.

if (['John', 'Ben', 'Chris'].includes(name)) {
  console.log('included');
} //Better way.
*/

/* ===== 5. Extract unique values =====

const languages = ['JavaScript', 'Python', 'Python', 'JavaScript', 'HTML', 'Python'];
const uniqueLanguages = [...new Set(languages)];
console.log(uniqueLanguages); // ["JavaScript", "Python", "HTML"]
*/

/* ===== 6. Run an event only once =====
If you have an event that you want to only run once, you can use the option once as a 
third parameter for addEventListener() .

document.body.addEventListener('click', () => {
    console.log('Run only once');
  }, { once: true });
*/

/* ===== 7. Sum all numbers in an array =====

let numbers = [6, 9, 90, 120, 55];
numbers.reduce((a, b) => a + b, 0); //returns 280
*/

/* ===== 8. Sum numbers inside an array of objects =====
You can still use the method reduce() in this situation, but you have to return an object 
inside the reduce callback.

const users  = [
  {name: "John", age: 25},
  {name: "Chris", age: 20},
  {name: "James", age: 31},
  ]
  
users.reduce(function(sum, value){
  return sum + value.age;
}, 0); //returns 76.


const users = [
  { name: 'John', age: 25 },
  { name: 'Chris', age: 20 },
  { name: 'James', age: 31 },
];

const userName = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {}); // { John: 25, Chris: 20, James: 31 }
*/

/* ===== 9. The keyword “in” =====
Use the keyword in in JavaScript to check if properties are defined inside an object or if 
elements are included inside an array for example.

const employee = {
  name: 'Chris',
  age: 25,
};

'name' in employee; //returns true.
'age' in employee; //returns true.
'experience' in employee; //retuens false.
*/

/* ===== 10. From number to an array of digits =====
We can use the spread operator, the map method, and the method parseInt() as a way to convert 
a number into an array of digits.

const toArray = num => [...`${num}`].map(elem => parseInt(elem));
toArray(1234); //returns [1, 2, 3, 4]
toArray(758999); //returns [7, 5, 8, 9, 9, 9]
*/

/* ===== 11. Capitalize the first letter of a string =====

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
capitalize("hello, you are a cool person!"); // Result: "Hello, you are a cool person!"
*/

/* ===== 12. Calculate the number of days between two dates =====

const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // Result: 1839
*/

/* ===== 13. Check if an array contains any items =====

const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]); // Result: true
isNotEmpty([]); // Result: false
*/

/* ===== 14. Different ways of merging multiple arrays =====

const merge = (a, b) => a.concat(b); // Merge but don't remove the duplications
const merge = (a, b) => [...a, ...b];

const merge = [...new Set(a.concat(b))]; // Merge and remove the duplications
const merge = [...new Set([...a, ...b])];
*/

/* ===== 15. Sort an array containing numbers =====

const sort = arr => arr.sort((a, b) => a - b);
sort([1, 5, 2, 4, 3]); // Result: [1, 2, 3, 4, 5]
*/

/* ===== 16. Arrays of objects can be sorted =====

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

const valuesSort = items.sort(function (a, b) {
  return a.value - b.value;
}); // sort by value

const nameSort = items.sort(function (a, b) {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}); // sort by name, !don't use at the same time =)
*/

/* ===== 17. Generate a random HEX color =====
let randomColor = () => `#${Math.random().toString(16).slice(2, 8).padStart(6, '0')}`;
// Or
randomColor = () => `#${(~~(Math.random()*(1<<24))).toString(16)}`;
*/

/* ===== 18. Get the value of a specified cookie =====
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
cookie('_ga'); // Result: "GA1.2.1929736587.1601974046"
*/

/* ===== 19. Get the text that the user has selected =====
const getSelectedText = () => window.getSelection().toString();
getSelectedText();
*/

/* ===== 20. Get the average value of an array using the “reduce” method =====
const values = [13, 2, 27, 90, 8, 57, 34];
const sum = values.reduce((previous, current) => (current += previous));
const avg = sum / values.length; // avg = 33
*/

/* ===== 21. Using the spread operator to combine objects =====
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const obj3 = { d: 4 };

const margeObj = { ...obj1, ...obj2, ...obj3 };
*/

/* ===== 22. Using the window.location object =====
JavaScript can access the current URL in parts. For this URL:
`https://thatsanegg.com/example/index.html?s=article`

window.location.protocol == `https:`
window.location.host == `thatsanegg.com`
window.location.pathname == `/example/index.html`
window.location.search == `?s=article`
*/

/* ===== Fibonacci function =====
const fib = (res, length) => {
  if (res.length >= length) return res;

  res.push(res[res.length - 2] + res[res.length - 1]);
  return fib(res, length);
};

fib([0, 1], 10);
*/
