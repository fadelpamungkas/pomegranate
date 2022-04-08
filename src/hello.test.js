const getSum = (arr) => arr.reduce((sum, curr) => sum + curr);

describe("#getSum", () => {
	it("should return the sum of the array", () => {
		expect(getSum([1, 2, 3])).toBe(6);
	});
});
