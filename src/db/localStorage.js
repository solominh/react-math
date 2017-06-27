
const DB_VERSION = 1

const getDBKey = (key) => `DB_VERSION_${DB_VERSION}_${key}`;

export const loadState = (key) => {
  try {
    let serializedState = localStorage.getItem(getDBKey(key))
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (key, state) => {
  try {
    let serializedState = JSON.stringify(state)
    localStorage.setItem(getDBKey(key), serializedState)
  } catch (err) {
    console.log(err)
  }
}
