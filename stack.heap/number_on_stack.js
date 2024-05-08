test('number on stack', () => {
  const initialHeapUsed = process.memoryUsage().heapUsed;
  const numOnStack = 10;
  const finalHeapUsed = process.memoryUsage().heapUsed;
  expect(finalHeapUsed).toBeGreaterThan(initialHeapUsed);
});