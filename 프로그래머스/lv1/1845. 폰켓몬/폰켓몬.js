function solution(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  if (nums.length / 2 <= map.size) {
    return nums.length / 2;
  } else {
    return map.size;
  }
}