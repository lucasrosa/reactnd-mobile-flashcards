import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'MobileFlashcards:deck'
const LAST_DAY_STUDIED_KEY = 'MobileFlashcards:studiedToday'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
  }

export function createEntry (decks) {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
}

export function submitEntry ({ entry, key }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: entry,
    }), (err,result) => { console.log(err,result)})
}
export function getCurrentDay() {
  return new Date().toJSON().slice(0,10).replace(/-/g,'/')
}

export function fetchLastDayStudied () {
  
  return AsyncStorage.getItem(LAST_DAY_STUDIED_KEY)
}

export function setLastDayStudied () {
  const currentDay = getCurrentDay()
  return AsyncStorage.setItem(LAST_DAY_STUDIED_KEY, JSON.stringify({lastDayStudied:currentDay}))
}


export const decks = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}