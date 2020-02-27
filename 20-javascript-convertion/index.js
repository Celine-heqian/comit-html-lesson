let hasCompletedCourses = false;
console.log("hasCompletedCourses:", hasCompletedCourses);
console.log("typeof hasCompletedCourses:", typeof hasCompletedCourses);

let age = 40;
console.log("age:", age);
console.log("typeof age: ", typeof age);

let firstName = "Celine";
console.log("firstName:", firstName);
console.log("typeof firstName: ", typeof firstName);

let finalScore = null;
console.log("finalScore:", finalScore);
console.log("typeof finalScore: ", typeof finalScore);

let winNumbers;
console.log("winNumbers:", winNumbers);
console.log("typeof winNumbers: ", typeof winNumbers);

boolToString = String(hasCompletedCourses);
console.log("hasCompletedCourses boolToString:", boolToString);
console.log(" typeof boolToString:", typeof boolToString);

numToString = String(age);
console.log("age numtoString:", numToString);
console.log("typeof numToString: ", typeof numToString);

let boolToNum = Number(hasCompletedCourses);
console.log("boolToNum hasCompletedCourses:", boolToNum);
console.log("typeof boolToNum: ", typeof boolToNum);

let stringToNum = Number(firstName);
console.log("stringToNum:", stringToNum);
console.log("typeof stringToNum: ", typeof stringToNum);

let stringToBool = Boolean(firstName);
console.log("stringToBool firstName:", stringToBool);
console.log("typeof stringToBool: ", typeof stringToBool);

let numToBool = Boolean(age);

console.log("numToBool age:", numToBool);
console.log("typeof numToBool: ", typeof numToBool);

console.log("Value of number 0 to bool is:", Boolean(0));
console.log("Value of number 1 to bool is:", Boolean(1));
console.log("Value of number -1 to bool is:", Boolean(-1));
console.log("Value of empty string to bool is:", Boolean(""));
console.log("Value of a space string to bool is:", Boolean(" "));
console.log("Value of null  to bool is:", Boolean(null));
console.log("Value of NaN to bool is:", Boolean(NaN));
console.log("Value of undefiend to bool is:", Boolean(undefined));
