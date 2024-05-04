// value/reference
let num1 = 5;
let num2 = num1;
num1 = 10;
console.log(num1); // 10
console.log(num2); // 5

let obj1 = { name: 'aba' };
let obj2 = obj1;
obj1.name = 'bababa';
console.log(obj1.name); // 'bababa'
console.log(obj2.name); // 'bababa'

// stack/heap
let obj = { key: 'value' };
let num = 10;

// garbage
let obj = { key: 'value' };
obj = null;

// unit_tests
function sum(a, b) {
  return a + b;
}

test('1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});
