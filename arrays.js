console.log("====================================");
console.log(`   ___ _      _   ___ ___   _ ____
  / __| |    /_\\ / __/ __| / |__ /
 | (__| |__ / _ \\\\__ \\__ \\ | ||_ \\
  \\___|____/_/ \\_\\___/___/ |_|___/
`);
console.log("==================================== \n");

const printDivider = () => console.log("\n==================================== \n");


console.log("--> Create array");
const arr1 = ["Raspberry", "Apple", "Banana"];
console.log(typeof arr1);
console.log(arr1);

printDivider();

// .push();
// .unshift();

// .shift();
// .pop();
// .splice();

// Filter by city
// .filter();

// Add the year was born (imagine that your birthday already past)
// .map();
// new Date().getFullYear();

// Order by name
// .sort();
const arr1Sorted = arr1.sort();
console.log(arr1Sorted);

// .reduce();
const reducer = (accumulator, value) => accumulator += ` ${value}`;
const arr1Reduce = arr1.reduce(reducer);
console.log(arr1Reduce);
console.log(typeof arr1Reduce);
