test('checks memory usage', () => {
  const memoryUsage = process.memoryUsage();
  expect(memoryUsage).toBeDefined();
});
