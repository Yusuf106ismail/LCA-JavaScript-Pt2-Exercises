// ==========================================
// 1. Multiply Three Distinct Numbers
// ==========================================
/**
 * Multiplies 3 numbers together.
 * Throws an error if any of the arguments are identical.
 */
function multiply(num1, num2, num3) {
  if (num1 === num2 || num1 === num3 || num2 === num3) {
    throw new Error("The arguments passed must NOT be the same number.");
  }
  return num1 * num2 * num3;
}

// ==========================================
// 2. Convert Minutes to Seconds (Function Expression)
// ==========================================
const convertToSeconds = function (minutes) {
  return minutes * 60;
};

// ==========================================
// 3. Fahrenheit to Celsius Converter
// ==========================================
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// ==========================================
// 4. Reverse a String
// ==========================================
function reverseString(str) {
  return str.split("").reverse().join("");
}

// ==========================================
// 5. Count Vowels in a String
// ==========================================
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// ==========================================
// 6. Check if a Number is Prime
// ==========================================
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false; // Exclude even numbers > 2

  // Check odd factors up to the square root of the number
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// ==========================================
// TESTING THE FUNCTIONS
// ==========================================

console.log("--- 1. multiply ---");
try {
  console.log("Result (2 * 3 * 4):", multiply(2, 3, 4)); // Expected: 24
  console.log("Result (2 * 2 * 4):", multiply(2, 2, 4)); // Should throw an error
} catch (error) {
  console.log("Error caught successfully:", error.message);
}

console.log("\n--- 2. convertToSeconds ---");
console.log("5 minutes in seconds:", convertToSeconds(5)); // Expected: 300

console.log("\n--- 3. fahrenheitToCelsius ---");
console.log("100°F in Celsius:", fahrenheitToCelsius(100).toFixed(2)); // Expected: 37.78

console.log("\n--- 4. reverseString ---");
console.log("Reversed 'hello':", reverseString("hello")); // Expected: "olleh"

console.log("\n--- 5. countVowels ---");
console.log("Vowels in 'Javascript':", countVowels("Javascript")); // Expected: 3

console.log("\n--- 6. isPrime (Testing 4 numbers) ---");
console.log("Is 1 prime?", isPrime(1)); // Expected: false
console.log("Is 2 prime?", isPrime(2)); // Expected: true
console.log("Is 11 prime?", isPrime(11)); // Expected: true
console.log("Is 15 prime?", isPrime(15)); // Expected: false
