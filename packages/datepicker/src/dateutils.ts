import dayjs from 'dayjs'
export const dateFormat = (
  year: string | number,
  month: string | number,
  date: string | number,
  format: string = 'YYYY-MM-DD'
): string => {
  return dayjs(`${year}-${month}-${date}`).format(format)
}
export const getCurrentYear = (): number => {
  return dayjs().year()
}

export const getCurrentMonth = (): number => {
  return dayjs().month()
}

export const getCurrentDate = (): number => {
  return dayjs().date()
}
export const getCurrentMonthFirstDay = (
  curYear: number,
  curMonth: number
): number => {
  return dayjs(`${curYear}-${curMonth}-1`).day()
}
export const getCurrentDaysCount = (
  curYear: number,
  curMonth: number
): number => {
  return dayjs(`${curYear}-${curMonth}`).daysInMonth()
}
export const getCurrentDaysList = (
  curYear: number,
  curMonth: number
): number[] => {
  const count = dayjs(`${curYear}-${curMonth}`).daysInMonth()
  return new Array(count).fill(0).map((_, index) => index + 1)
}
export const getPrevDaysCount = (curYear: number, curMonth: number): number => {
  let count = getCurrentMonthFirstDay(curYear, curMonth)
  if (count === 1) return 0
  if (count === 0) count = 7
  return count - 1
}
export const getPrevDaysList = (
  curYear: number,
  curMonth: number
): number[] => {
  let count = getCurrentMonthFirstDay(curYear, curMonth)
  if (count === 1) return []
  if (count === 0) count = 7
  const prevDaysList = getCurrentDaysList(curYear, curMonth - 1)
  return prevDaysList.slice(-(count - 1))
}
export const getNextDaysList = (
  curYear: number,
  curMonth: number
): number[] => {
  const prevCount = getPrevDaysCount(curYear, curMonth)
  const curCount = getCurrentDaysCount(curYear, curMonth)
  const count = 42 - prevCount - curCount
  return new Array(count).fill(0).map((_, index) => index + 1)
}
export const genTenYearsList = (year: number): number[] => {
  const list = []
  for (let i = 0; i < 10; i++) {
    if ((year + i) % 10 === 0) {
      list.push(year + i)
      break
    }
    list.push(year + i)
  }
  for (let i = 1; i < 10; i++) {
    if ((year - i + 1) % 10 === 0) {
      list.unshift(year - i)
      break
    }
    list.unshift(year - i)
  }
  return list
}
