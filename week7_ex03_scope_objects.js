// ==========================================
// 1. Variable Scope Demonstration
// ==========================================

// TODO: Create a global variable called globalCount.
let globalCount = 10;

// TODO: Create a function that demonstrates local scope.
function localScopeDemo() {
  // This variable is local to this function and cannot be accessed outside
  let localCount = 5;
  console.log("Inside localScopeDemo - localCount:", localCount);
  console.log(
    "Inside localScopeDemo - globalCount (accessible here):",
    globalCount,
  );
}

// TODO: Create a function that tries to modify both variables.
function modifyVariables() {
  // Modifying the global variable (this changes it everywhere)
  globalCount = 42;

  try {
    // Trying to modify the localCount from the other function
    localCount = 99;
  } catch (error) {
    console.log("Cannot modify localCount here:", error.message);
  }
}

// ==========================================
// 2. Object Creation: Constructor Functions
// ==========================================

// TODO: Create a Student constructor function.
function Student(firstName, lastName, age, grade) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.grade = grade;

  // Method inside the constructor
  this.getDetails = function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old and is in Grade ${this.grade}.`;
  };
}

// TODO: Create several student instances.
const student1 = new Student("Sarah", "Connor", 17, 11);
const student2 = new Student("John", "Doe", 16, 10);
const student3 = new Student("Miles", "Morales", 15, 9);

// ==========================================
// 3. Object Creation: Object Literal
// ==========================================

// TODO: Create an object literal with nested properties.
const academy = {
  name: "Tech Innovation Academy",
  location: "Cape Town",
  // Nested object property
  facilities: {
    hasLab: true,
    numberOfClassrooms: 12,
    libraryDetails: {
      hasDigitalCatalog: true,
      totalBooks: 5000,
    },
  },
  // Array of nested objects
  courses: ["Web Development", "Data Science", "UX/UI Design"],

  // Method to display information
  getSummary() {
    return `${this.name} located in ${this.location} has ${this.facilities.numberOfClassrooms} classrooms.`;
  },
};

// ==========================================
// CODE EXECUTION & TESTING
// ==========================================

console.log("--- Scope Tests ---");
localScopeDemo();

console.log("\nInitial globalCount:", globalCount); // Expected: 10
modifyVariables();
console.log("Updated globalCount after modification:", globalCount); // Expected: 42

console.log("\n--- Student Instances ---");
console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());

console.log("\n--- Nested Object Literal ---");
console.log("Academy Summary:", academy.getSummary());
console.log(
  "Accessing deeply nested data (Total Books):",
  academy.facilities.libraryDetails.totalBooks,
); // Expected: 5000
