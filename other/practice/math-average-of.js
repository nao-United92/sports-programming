const averageOf = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

export { averageOf };
