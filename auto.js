const { keyboard, Key, up } = require("@nut-tree-fork/nut-js");
//passenger details
const customers = {
  customer1: {
    name: "RAJU PUSTI",
    age: 30,
    gender: 1
  },
  // customer2: {
  //   name: "RAJU PUSTIi",
  //   age: 30,
  //   gender: 1
  // }
};


keyboard.config.autoDelayMs = 100;

async function pressTab(times = 1) {
  for (let i = 0; i < times; i++) {
    await keyboard.pressKey(Key.Tab);
    await keyboard.releaseKey(Key.Tab);
  }
}
async function pressDownArrow(times = 1) {
  for (let i = 0; i < times; i++) {
    await keyboard.pressKey(Key.Down);
    await keyboard.releaseKey(Key.Down);
  }
}


async function run() {
  await new Promise(resolve => setTimeout(resolve, 2000));

 
  await keyboard.type(customers.customer1.name); 
  await pressTab();
  await keyboard.type(customers.customer1.age.toString());
  await pressTab(); 
  await pressDownArrow(customers.customer1.gender); 
  // await pressTab(3)
  // await keyboard.pressKey(Key.Enter); 
  // await keyboard.releaseKey(Key.Enter);
  // await new Promise(resolve => setTimeout(resolve,1000));
  // await keyboard.type(customers.customer2.name); 
  // await pressTab();
  // await keyboard.type(customers.customer2.age.toString());
  // await pressTab();   
  // await pressDownArrow(customers.customer2.gender);

  await pressTab(6); 
  //await keyboard.type("7076757473"); if need mobile no
  await pressTab(7);
  await keyboard.pressKey(Key.Enter); 
  await keyboard.releaseKey(Key.Enter);
  
}


run().catch(console.error);
