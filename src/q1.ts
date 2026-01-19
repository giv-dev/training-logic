// 問題：最長連続増加部分列の長さ
// 問題文
// 整数 N と、N 個の整数からなる数列 A が与えられます。数列 A の中で、値が連続して増加している（A[i] < A[i+1]）部分列のうち、最も長いものの長さを出力してください。

// 入力例
// 6
// 1 2 5 3 4 1

// 出力例
// 3

const lines: string[] = ["6", "1 2 5 3 4 1"];

const numbers: number[] = (lines[1]?.split(" ") ?? []).map(Number);

const maxIncreasingSubsequenceLength = (nums: number[]): number => {
  if (nums.length === 0) return 0;

  let maxLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      currentLength = 1;
    }
  }

  return maxLength;
};

console.log(maxIncreasingSubsequenceLength(numbers));
