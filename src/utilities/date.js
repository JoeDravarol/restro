export const todaysDate = () => new Date().toISOString().substring(0, 10)

export const formatDateToDMY = date => {
  const [year, month, day] = date.split('-')

  return [day, month, year].join('-')
}
