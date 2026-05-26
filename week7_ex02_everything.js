// ==========================================
// 1. Sum From 0 to N (With Custom Integer Validation)
// ==========================================
function sum(n) {
  // Check if the value is a number type and is not NaN
  if (typeof n !== "number" || n !== n) {
    return "The value passed is not a number";
  }

  // Check if the number is an integer without using Number.isInteger() or Regex
  // An integer divided by 1 always has a remainder of 0
  if (n % 1 !== 0) {
    return "The value passed is a number, but it is not an integer";
  }

  let total = 0;
  // Handles positive numbers. If negative, the loop just won't run and returns 0.
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// ==========================================
// 2. Factorial Function
// ==========================================
function factorial(num) {
  if (num < 0) return "Factorial is not defined for negative numbers";
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

// ==========================================
// 3. Funky Math (Arguments-Length Dependent)
// ==========================================
function funkyMath(...args) {
  const len = args.length;

  if (len === 2) {
    // Subtract the first from the second -> args[1] - args[0]
    return args[1] - args[0];
  } else if (len === 3) {
    // Add all 3 numbers together
    return args[0] + args[1] + args[2];
  } else if (len === 4) {
    // (arg1 + arg2) / (arg3 + arg4)
    return (args[0] + args[1]) / (args[2] + args[3]);
  } else {
    return "Invalid number of arguments. Please pass 2, 3, or 4 arguments.";
  }
}

// ==========================================
// 4. Array Filtering and Sorting (Odd Numbers)
// ==========================================
const originalArray = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

// Loop through and remove odd numbers (or separate them)
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] % 2 !== 0) {
    oddNumbers.push(originalArray[i]);
  }
}

// Bonus: Arrange odd numbers from smallest to biggest
oddNumbers.sort((a, b) => a - b);

// ==========================================
// 5, 6, & 7. Objects: 'me' Manipulation
// ==========================================
// Create object
const me = {
  firstName: "Alex",
  lastName: "Smith",
  age: 25,
  favouriteColour: "Midnight Blue",
  dreamCar: "Porsche 911 GT3 RS",
};

// Add new property 'favourite food'
me["favourite food"] = "Sushi";

// Delete the age property
delete me.age;

// ==========================================
// TESTING THE CODE
// ==========================================

console.log("--- 1. sum Testing ---");
console.log(sum(5)); // Expected: 15 (0+1+2+3+4+5)
console.log(sum("hello")); // Expected: "The value passed is not a number"
console.log(sum(5.5)); // Expected: Custom message indicating it's not an integer

console.log("\n--- 2. factorial Testing ---");
console.log("Factorial of 4:", factorial(4)); // Expected: 24

console.log("\n--- 3. funkyMath Testing ---");
console.log("2 args (10, 25):", funkyMath(10, 25)); // Expected: 15 (25 - 10)
console.log("3 args (5, 5, 5):", funkyMath(5, 5, 5)); // Expected: 15 (5 + 5 + 5)
console.log("4 args (8, 2, 3, 5):", funkyMath(8, 2, 3, 5)); // Expected: 1.25 ((8+2) / (3+5))

console.log("\n--- 4. Array Filter & Sort Testing ---");
console.log("Sorted Odd Numbers:", oddNumbers); // Expected: [1, 33, 45]

console.log("\n--- 5, 6, 7. Object 'me' Testing ---");
console.log(me);
// Expected output will show firstName, lastName, favouriteColour, dreamCar, and 'favourite food'.
// 'age' will be completely missing.
