export function middleNum(num: number, min = 0, max = 100): number {
  let middle = 0
  middle = Math.min(num, max)
  middle = Math.max(middle, min)
  return middle
}
