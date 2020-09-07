export const getItem = key => {
  return JSON.parse(sessionStorage.getItem(key))
}

export const setItem = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data))
}

export const removeItem = key => {
  sessionStorage.removeItem(key)
}

export const clear = () => {
  sessionStorage.clear()
}

export const itemInSession = key => {
  return !!getItem(key)
}
