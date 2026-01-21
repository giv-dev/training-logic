// 問題文
// N 人のプレイヤーが円状に座っています。プレイヤーには時計回りに 1 から N までの番号が振られています。 以下のルールに従って、最後に残るプレイヤーの番号を求めてください。
// 1. プレイヤー 1 から開始し、時計回りに K 番目のプレイヤーを脱落させる。
// 2. 脱落したプレイヤーの次のプレイヤーから数え直し、再び K 番目のプレイヤーを脱落させる。
// 3. これをプレイヤーが 1 人になるまで繰り返す。

// 入力例
// N = 7 K = 3

// 出力例
// 4

const input = {
  n: 7,
  k: 3,
}

const solveOptimized = (input: { n: number, k: number }): number => {

  let l: number = input.n
  const skip: number = input.k - 1
  const arry: number[] = [...Array(l)].map((_, i) => i + 1)
  let currentPosition: number = skip

  while (l !== 1) {
    arry.splice(currentPosition, 1)
    l--
    currentPosition = (currentPosition + skip) % l
  }

  return arry[0]!
}

console.log(solveOptimized(input))