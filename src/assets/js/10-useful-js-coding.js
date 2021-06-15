// ***** 10 Useful JavaScript Coding Techniques That You Should Use *****

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
  
users.reduce(function(a, b){
  return {age: a.age + b.age}
}).age; //returns 76.
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
