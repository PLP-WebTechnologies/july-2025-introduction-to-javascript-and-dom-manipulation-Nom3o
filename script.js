// ================= Part 1: Variables & Conditionals =================
let age = 18;
let userName = "Abel";

if (age >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is not an adult.");
}

// ================= Part 2: Functions =================
// Function 1: Calculate discount
function calculateDiscount(price, discountPercent) {
    return discountPercent >= 20 ? price - (price * discountPercent / 100) : price;
}

// Function 2: Greet user
function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log(calculateDiscount(100, 25)); // Output: 75
console.log(greetUser("Abel"));          // Output: Hello, Abel!

// ================= Part 3: Loops =================
let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log("Number: " + numbers[i]);
}

let countdown = 3;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ================= Part 4: DOM Manipulation =================
const greetingEl = document.getElementById("greeting");
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const itemList = document.getElementById("itemList");

// 1. Change text
changeTextBtn.addEventListener("click", () => {
    greetingEl.textContent = "Text has been changed!";
});

// 2. Toggle red color
toggleColorBtn.addEventListener("click", () => {
    greetingEl.classList.toggle("red");
});

// 3. Add items dynamically
const items = ["Apple", "Banana", "Cherry"];
items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
});
