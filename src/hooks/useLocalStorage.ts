export const localStorage = (key: string, initialValue: string): string => {
  try {
    const item = window.localStorage.getItem(key)
    if (item) {
      return JSON.parse(item) as string
    }

    window.localStorage.setItem(key, initialValue)
    return initialValue
  } catch (error) {
    console.log(error)
    return initialValue
  }
}
export const setLocalStorage = (key: string, value: string): string => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return value
  } catch (error) {
    console.log(error)
    return value
  }
}
