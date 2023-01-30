// Create a variable named myAge and set it equal to your age
let myAge = 26;

// Create a changeable variable named earlyYears and set it equal to 2
let earlyYears = 2;

// Change earlyYears by multiplying earlyYears by 10.5
earlyYears = earlyYears * 10.5;

// Create a changeable variable called laterYears and set it equal to myAge subtracted by 2
let laterYears = myAge - 2;

// Multiply laterYears by 4
laterYears = laterYears * 4;

console.log(earlyYears);
console.log(laterYears);

// Create a variable called myAgeInDogYears and add earlyYears and laterYears together
let myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string, and call its built-in method .toLowerCase(), then save it to a variable called myName
let myName = "Cathy".toLowerCase();

// Write a console.log statement that displays your name and age in dog years
console.log(
  `My name is ${myName}, I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
