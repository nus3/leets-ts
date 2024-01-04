function twoSum(nums: number[], target: number): number[] {
  let results: number[] = [];
  const length = nums.length;

  for (let index = 0; index < length; index++) {
    for (const [i, num] of nums.entries()) {
      if (i === index) {
        continue;
      }

      const currentValue = nums[index] + num;
      if (target === currentValue) {
        results = [i, index];
      }
    }
  }

  return results;
}

function twoSum1(nums: number[], target: number): number[] {
  const numberMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;
    if (numberMap.has(difference)) return [numberMap.get(difference), i];
    numberMap.set(num, i);
  }

  return [];
}

// @ts-ignore
const main = () => {
  console.log(twoSum1([2, 7, 11, 15], 9));
  console.log(twoSum1([3, 2, 4], 6));
  console.log(twoSum1([3, 3], 6));
};

main();
