
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; 


const original1 = [1, 2, 3];
const copy = [...original1]; 


const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); 


const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; 


const original2 = { x: 1, y: 2 };
const modified = { ...original2, y: 3 }; 


function sum(first, ...others) {
    return others.reduce((total, num) => total + num, first);
  }
  console.log(sum(1, 2, 3, 4)); 

  const [first, second, ...rest] = [1, 2, 3, 4, 5];
  console.log(first); 
  console.log(second);
  console.log(rest); 


  const { name, ...details } = { name: "Alice", age: 30, country: "USA" };
  console.log(name); 
  console.log(details); 