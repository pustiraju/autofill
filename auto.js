const { keyboard, Key } = require("@nut-tree-fork/nut-js");

// Passenger Data
const customers = [
  { name: "SUDARSHAN MUKHER", age: 48, gender: 1 },
  { name: "SRAYASI MUKHERJE", age: 18, gender: 2 }
];

// Random Delay Generator (Faster Execution)
function randomDelay(min = 50, max = 120) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Press Key with Random Delay
async function pressKey(key, times = 1) {
  for (let i = 0; i < times; i++) {
    await keyboard.pressKey(key);
    await keyboard.releaseKey(key);
    await new Promise(resolve => setTimeout(resolve, randomDelay(50, 100)));
  }
}

// Type Text Quickly
async function typeText(text) {
  await keyboard.type(text); // Direct input without per-character delays
  await new Promise(resolve => setTimeout(resolve, randomDelay(30, 80))); // Shorter pause
}

// Run Tatkal Booking Automation for All Passengers
async function run() {
  await new Promise(resolve => setTimeout(resolve, 500)); // Reduced Initial Wait

  for (const customer of customers) {
    await typeText(customer.name);
    await pressKey(Key.Tab);
    await typeText(customer.age.toString());
    await pressKey(Key.Tab);
    await pressKey(Key.Down, customer.gender); // Select Gender
    
    await pressKey(Key.Tab, 3); // Skip to next field
    await pressKey(Key.Enter); // Confirm passenger
  }
}

run().catch(console.error);
