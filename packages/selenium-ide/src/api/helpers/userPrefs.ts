import { UserPrefs } from 'api/types'
import storage from 'main/store'

export const getUserPrefs = (): UserPrefs => {
    const userPrefs = {
      insertCommandPref: storage.get<'insertCommandPref'>('insertCommandPref')
        ? storage.get<'insertCommandPref'>('insertCommandPref')
        : 'After',
    } as UserPrefs
    return userPrefs
}

export const setUserPrefs = (prefs: UserPrefs) => {
    storage.set<'insertCommandPref'>('insertCommandPref', prefs.insertCommandPref)
}
