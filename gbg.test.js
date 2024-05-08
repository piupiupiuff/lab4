test('checks garbage collector behavior', () => {
  let obj = { key: 'value' };
  const initialHeapUsed = process.memoryUsage().heapUsed;
  obj = null;

  return new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => {
      const finalHeapUsed = process.memoryUsage().heapUsed;
      expect(finalHeapUsed).toBeLessThan(initialHeapUsed);
    });
});
