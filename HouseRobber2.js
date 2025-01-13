
/**
 * @param {number[]} nums
 * @return {number}
 */

function rob(nums){
    if (nums.length === 1) return nums[0];

    const RobLinear = (houses) => {
        let prevMax = 0;
        let currMax = 0;
        for (let money of houses) {
            let temp = currMax;
            currMax = Math.max(prevMax + money, currMax);
            prevMax = temp;
        }
        return currMax;
    }
    let max1 = RobLinear(nums.slice(0, nums.length - 1));
    let max2 = RobLinear(nums.slice(1));
    return Math.max(max1, max2);
};

console.log(rob([1,3,1,3,100]));