// ==========================================
// 1. Multiline String via Template Literals
// ==========================================

// No more breaking lines with '+' or '\n'—template literals preserve formatting natively
const emailTemplate = `
Dear Valued Customer,

Thank you for reaching out to our support team. 
We have received your request and a representative will update you shortly.

Best regards,
The Tech Support Team
`;

// ==========================================
// 2. HTML Generation using Template Literals
// ==========================================

/**
 * Generates a clean, dynamic HTML card structure for a product display profile.
 */
function generateProductCard(product) {
  const { name, price, category, isAvailable } = product;

  return `
        <div class="product-card ${isAvailable ? "instock" : "out-of-stock"}">
            <span class="badge">${category.toUpperCase()}</span>
            <h2>${name}</h2>
            <p class="price">$${price.toFixed(2)}</p>
            <button ${!isAvailable ? "disabled" : ""}>
                ${isAvailable ? "Add to Cart" : "Sold Out"}
            </button>
        </div>
    `.trim(); // .trim() cleans up extra whitespace at the start/end
}

// ==========================================
// 3. Converting Regular Functions to Arrow Functions
// ==========================================

// --- BEFORE (Regular Function) ---
// function calculateArea(width, height) {
//     return width * height;
// }

// --- AFTER (Sleek, implicit-return Arrow Function) ---
const calculateArea = (width, height) => width * height;

// --- BEFORE (Regular Function) ---
// function greetUser(username) {
//     return `Welcome back, ${username}!`;
// }

// --- AFTER (Single parameter means no parentheses required) ---
const greetUser = (username) => `Welcome back, ${username}!`;

// ==========================================
// 4. Arrow Functions with Array Methods
// ==========================================

const inventory = [
  {
    name: "Wireless Mouse",
    price: 25,
    category: "Electronics",
    isAvailable: true,
  },
  {
    name: "Mechanical Keyboard",
    price: 90,
    category: "Electronics",
    isAvailable: true,
  },
  { name: "Coffee Mug", price: 15, category: "Lifestyle", isAvailable: false },
  {
    name: "Noise Cancelling Headphones",
    price: 200,
    category: "Electronics",
    isAvailable: true,
  },
  { name: "Desk Mat", price: 30, category: "Lifestyle", isAvailable: true },
];

// A. .filter() -> Get only premium electronics over $50
const premiumElectronics = inventory.filter(
  (item) => item.category === "Electronics" && item.price > 50,
);

// B. .map() -> Extract just a list of price tags formatted as strings
const priceTags = inventory.map((item) => `${item.name}: $${item.price}`);

// C. .reduce() -> Calculate the total value of all currently available stock
const totalInStockValue = inventory
  .filter((item) => item.isAvailable)
  .reduce((runningTotal, item) => runningTotal + item.price, 0);

// ==========================================
// TESTING THE MODERN SYNTAX
// ==========================================

console.log("--- 1. Multiline String ---", emailTemplate);

console.log("--- 2. HTML Generation Output ---");
const sampleItem = {
  name: "Gaming Monitor",
  price: 349.99,
  category: "Electronics",
  isAvailable: true,
};
console.log(generateProductCard(sampleItem));

console.log("\n--- 3. Converted Arrow Functions ---");
console.log("Area (10x5):", calculateArea(10, 5)); // Expected: 50
console.log(greetUser("CodeNinja")); // Expected: "Welcome back, CodeNinja!"

console.log("\n--- 4. Array Methods with Arrow Functions ---");
console.log("Premium Electronics:", premiumElectronics);
console.log("Price Tags:", priceTags);
console.log("Total Stock Value: $", totalInStockValue); // Expected: 345 (25 + 90 + 200 + 30)
