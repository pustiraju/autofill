const { keyboard, Key } = require("@nut-tree-fork/nut-js");


const customers = [
  { name: "SUDARSHAN MUKHER", age: 48, gender: 1 },
  { name: "SRAYASI MUKHERJE", age: 18, gender: 2 }
];

function randomDelay(min = 50, max = 120) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function pressKey(key, times = 1) {
  for (let i = 0; i < times; i++) {
    await keyboard.pressKey(key);
    await keyboard.releaseKey(key);
    await new Promise(resolve => setTimeout(resolve, randomDelay(50, 100)));
  }
}

async function typeText(text) {
  await keyboard.type(text); 
  await new Promise(resolve => setTimeout(resolve, randomDelay(30, 80))); 
}

async function run() {
  await new Promise(resolve => setTimeout(resolve, 500)); 

  for (const customer of customers) {
    await typeText(customer.name);
    await pressKey(Key.Tab);
    await typeText(customer.age.toString());
    await pressKey(Key.Tab);
    await pressKey(Key.Down, customer.gender); 
    
    await pressKey(Key.Tab, 3); 
    await pressKey(Key.Enter); 
  }
}

run().catch(console.error);
