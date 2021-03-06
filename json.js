console.log("====================================");
console.log(`   ___ _      _   ___ ___   _ ____
  / __| |    /_\\ / __/ __| / |__ /
 | (__| |__ / _ \\\\__ \\__ \\ | ||_ \\
  \\___|____/_/ \\_\\___/___/ |_|___/
`);
console.log("==================================== \n");


// This is a function
function printDivider() {
  console.log("\n==================================== \n");
}

// Arrow function
// const printDivider = () => console.log("\n==================================== \n");

// This is a variable
const myData = {
  name: "Dídac",
  age: 24,
  city: "Amsterdam",
  languages: [
    'Catalan',
    'Spanish',
    'English'
  ]
};

// JSON
console.log(`--> myData is an ${typeof myData} \n`);
console.log(myData);

// Executing printDivider function
printDivider();

// JSON string
const jsonStringify = JSON.stringify(myData);
console.log(`--> myData stringified is a ${typeof jsonStringify}\n`);
console.log(jsonStringify);

// Executing printDivider function
printDivider();

// Object keys
// hasOwnProperty()
const jsonKeys = JSON.stringify(myData);
console.log(`--> myData keys are an ${typeof jsonKeys}\n`);
console.log(jsonKeys);

// Executing printDivider function
printDivider();
