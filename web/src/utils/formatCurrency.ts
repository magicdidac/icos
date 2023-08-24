import formatNumber from "./formatNumber"

export default (value: number): string => {
  const decimals = parseFloat((value % 1).toFixed(2))
  const valueWithDots = (value.toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  if (decimals > 0) return valueWithDots + ',' + formatNumber(parseInt((decimals * 100).toFixed(0))) + ' €'
  return valueWithDots + ' €'
}