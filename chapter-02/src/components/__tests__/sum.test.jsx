import sum from "../sum";

test("This sum funtion should give the sum of two numberes", () => {
    const result = sum(3, 5);
    
    expect(result).toBe(8);
});