
const DB_VERSION = 1;
const DB_VERSION_KEY = 'DB_VERSION';

const getDBKey = (key) => `DB_VERSION_${DB_VERSION}_${key}`;

const checkDB = (version) => {
  const prevDBVersion = localStorage.getItem(DB_VERSION_KEY)

  // Remove old database
  if (prevDBVersion && (Number(prevDBVersion) !== DB_VERSION)) {
    const DB_PREFIX = `DB_VERSION_${prevDBVersion}`
    const removeKeys = []
    const len = localStorage.length
    for (let i = 0; i < len; i++) {
      const key = localStorage.key(i)
      if (key.startsWith(DB_PREFIX)) {
        removeKeys.push(key)
      }
    }

    removeKeys.forEach((key) => localStorage.removeItem(key))
  }

  // Set new data version
  if (!prevDBVersion || Number(prevDBVersion) !== DB_VERSION) {
    localStorage.setItem(DB_VERSION_KEY, DB_VERSION)
  }

}

checkDB(DB_VERSION)

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
