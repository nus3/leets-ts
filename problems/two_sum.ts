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

const main = () => {
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([3, 2, 4], 6));
  console.log(twoSum([3, 3], 6));
};

main();
