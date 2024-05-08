test('obj on heap', () => {
  const initialHeapUsed = process.memoryUsage().heapUsed;
  const objOnHeap = { key: 'value' };
  const finalHeapUsed = process.memoryUsage().heapUsed;

  expect(finalHeapUsed).toBeGreaterThan(initialHeapUsed);
});