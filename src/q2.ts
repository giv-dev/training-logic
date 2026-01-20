// 問題：区間の重なり（Bランク相当）
// N 個の予定があります。各予定 i は開始時刻 Si と終了時刻 Ei で表されます。 いずれかの予定が入っている（少なくとも1つの予定に含まれる）時間の合計を求めてください。 ただし、予定の区間 [Si, Ei] は、Si 以上 Ei 以下のすべての時間を含みます。

// 入力例
// 3
// 10 20
// 15 25
// 30 35

// 出力例 20

const lines: string[] = ["3", "10 20", "15 25", "30 35", ""];

const calcTotalTime = (lines: string[]): number => {
  const count: number = Number(lines.shift());

  const intervals = lines
    .map((s) => s.split(" ").map(Number))
    .filter((s) => s[1])
    .sort((a, b) => a[0]! - b[0]!);

  if (intervals.length === 0) return 0;

  let start: number = intervals[0]![0]!;
  let end: number = intervals[0]![1]!;
  let total: number = 0;

  for (let i = 1; i < count; i++) {
    if (intervals[i]![0]! <= end) {
      end = Math.max(end, intervals[i]![1]!);
    } else {
      total += end - start;
      start = intervals[i]![0]!;
      end = intervals[i]![1]!;
    }
  }
  total += end - start;

  return total;
};

console.log(calcTotalTime(lines))