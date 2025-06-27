function hasTargetSum(array, target) {
  const seen = new Set();

  for (const num of array) {
    const complement = target - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n)
  Space Complexity: O(n)
*/

/* 
  Add your pseudocode here

  - Create an empty Set to store numbers we've already seen.
- Loop through each number in the array:
  - Calculate the complement as target - current number
  - If the complement is already in the Set, return true
  - Otherwise, add the current number to the Set
- If we finish the loop without finding a pair, return false

*/

/*
  Add written explanation of your solution here
  Explanation:
  We use a Set to remember the numbers we've seen.
  For each number, we check if its complement (target - number) exists in the Set.
  If it does, we found two numbers that sum to the target.
  If not, we keep checking.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, -1, 2, -3, 1], -2)); // -3 + 1

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));
}

module.exports = hasTargetSum;
