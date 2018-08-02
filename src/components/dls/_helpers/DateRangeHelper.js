export const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']  

export const yearRange = (startYear = 1900) => {
  const currentYear = new Date().getFullYear()
  const size = (currentYear - startYear) + 1
  const years = [...Array(size).keys()].map(i => i + startYear);
  return years.reverse()
}
