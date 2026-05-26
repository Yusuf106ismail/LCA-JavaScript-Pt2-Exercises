// ==========================================
// 1. User Input Validation (Custom Error Handling)
// ==========================================

/**
 * Validates a user registration profile.
 * Throws custom errors if inputs don't meet strict rules.
 */
function validateUserProfile(username, age) {
  // 1. Check if values are provided
  if (!username || age === undefined) {
    throw new Error("MissingFieldsError: Both username and age are required.");
  }

  // 2. Validate username length
  if (typeof username !== "string" || username.trim().length < 3) {
    throw new Error(
      "ValidationError: Username must be a string of at least 3 characters.",
    );
  }

  // 3. Validate age constraints
  if (typeof age !== "number" || age % 1 !== 0) {
    throw new Error("TypeError: Age must be a whole integer.");
  }

  if (age < 18 || age > 120) {
    throw new RangeError("RangeError: Age must be between 18 and 120.");
  }

  return {
    status: "Success",
    message: `Profile validated for user: ${username.trim()}`,
  };
}

// ==========================================
// 2. Demonstration of Multiple Error Types
// ==========================================

/**
 * Intentionally triggers and catches different types of built-in JavaScript errors
 * based on a scenario string.
 */
function demonstrateErrors(scenario) {
  try {
    if (scenario === "reference") {
      // Throws ReferenceError because nonExistentVariable is not defined
      console.log(nonExistentVariable);
    } else if (scenario === "type") {
      // Throws TypeError because you cannot invoke a number as a function
      const num = 42;
      num();
    } else if (scenario === "range") {
      // Throws RangeError because an array cannot have a negative length
      const arr = new Array(-1);
    } else {
      console.log("Safe scenario executed smoothly.");
    }
  } catch (error) {
    // Handling specific error types using 'instanceof'
    if (error instanceof ReferenceError) {
      console.error(
        `[Caught ReferenceError]: Variable path is broken! -> ${error.message}`,
      );
    } else if (error instanceof TypeError) {
      console.error(
        `[Caught TypeError]: Operation on invalid data type! -> ${error.message}`,
      );
    } else if (error instanceof RangeError) {
      console.error(
        `[Caught RangeError]: Numeric value fell outside allowed bounds! -> ${error.message}`,
      );
    } else {
      console.error(`[Caught Generic Error]: ${error.message}`);
    }
  }
}

// ==========================================
// 3. Helper Functions: String Manipulation (DRY)
// ==========================================

const StringUtils = {
  /**
   * Capitalizes the first letter of every word in a string.
   */
  capitalizeWords(str) {
    if (typeof str !== "string") return "";
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },

  /**
   * Truncates a string to a specified length and adds ellipses if it exceeds it.
   */
  truncate(str, maxLength = 30) {
    if (typeof str !== "string") return "";
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength).trim() + "...";
  },

  /**
   * Checks if a string contains a specific substring (case-insensitive).
   */
  containsIgnoreCase(str, searchStr) {
    if (typeof str !== "string" || typeof searchStr !== "string") return false;
    return str.toLowerCase().includes(searchStr.toLowerCase());
  },
};

// ==========================================
// 4. Helper Functions: Array Operations (DRY)
// ==========================================

const ArrayUtils = {
  /**
   * Safely returns only unique elements from an array.
   */
  removeDuplicates(arr) {
    if (!Array.isArray(arr)) return [];
    return [...new Set(arr)];
  },

  /**
   * Computes the numerical average of an array. Ignores non-numeric values.
   */
  calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;

    const validNumbers = arr.filter(
      (item) => typeof item === "number" && !isNaN(item),
    );
    if (validNumbers.length === 0) return 0;

    const total = validNumbers.reduce((sum, num) => sum + num, 0);
    return total / validNumbers.length;
  },

  /**
   * Groups an array of objects by a specific property key.
   */
  groupByProperty(arr, key) {
    if (!Array.isArray(arr)) return {};
    return arr.reduce((accumulator, currentObject) => {
      const groupValue = currentObject[key];
      if (!accumulator[groupValue]) {
        accumulator[groupValue] = [];
      }
      accumulator[groupValue].push(currentObject);
      return accumulator;
    }, {});
  },
};

// ==========================================
// CODE EXECUTION & TESTING
// ==========================================

console.log("--- 1. Testing Input Validation ---");
try {
  console.log(validateUserProfile("Alice", 25)); // Should succeed
  validateUserProfile("Bob", 16); // Should fail (RangeError)
} catch (e) {
  console.log(`Caught Expected Error: ${e.message}`);
}

console.log("\n--- 2. Testing Multiple Error Types ---");
demonstrateErrors("reference");
demonstrateErrors("type");
demonstrateErrors("range");

console.log("\n--- 3. Testing String Helpers ---");
console.log(
  "Capitalize:",
  StringUtils.capitalizeWords("hello open source world"),
);
console.log(
  "Truncate:",
  StringUtils.truncate("This is a very long sentence that needs clipping.", 20),
);
console.log(
  "Contains:",
  StringUtils.containsIgnoreCase("JavaScript rules!", "script"),
); // Expected: true

console.log("\n--- 4. Testing Array Helpers ---");
console.log(
  "Unique elements:",
  ArrayUtils.removeDuplicates([1, 2, 2, 3, 4, 4, 4, 5]),
);
console.log("Average:", ArrayUtils.calculateAverage([10, "broken", 20, 30])); // Expected: 20 (ignores "broken")

const students = [
  { name: "Sarah", grade: "A" },
  { name: "John", grade: "B" },
  { name: "Miles", grade: "A" },
];
console.log("Grouped by Grade:", ArrayUtils.groupByProperty(students, "grade"));
