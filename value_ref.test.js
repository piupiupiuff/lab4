// Функція, що змінює значення примітивного типу
function changePrimitiveValue(value) {
  value = 10;
  return value;
}

// Функція, що змінює властивість об'єкта
function changeObjectProperty(obj) {
  obj.key = 'new value';
}

test('checks pass by value for primitives', () => {
  let primitive = 5;
  const newValue = changePrimitiveValue(primitive);
  expect(primitive).toBe(5);
  expect(newValue).toBe(10);
});

test('checks pass by reference for objects', () => {
  let obj = { key: 'value' };
  changeObjectProperty(obj);
  expect(obj.key).toBe('new value');
});
