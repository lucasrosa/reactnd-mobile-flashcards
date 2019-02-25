import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'MobileFlashcards:deck'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
  }

export function submitEntry ({ entry, key }) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
        [key]: entry,
    }))
}


const decks = {
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

// Return all of the decks along with their titles, questions, and answers
export async function getDecks() {
    return Promise.resolve(decks)
}

// Take in a single id argument and return the deck associated with that id
export async function getDeck(id) {
    return Promise.resolve(decks[id])
}
// Take in a single title argument and add it to the decks. 
export async function saveDeckTitle(title) {
    decks[title] = {
        title,
        questions: []
    }
    return Promise.resolve(decks)
}

// Take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title
export async function addCardToDeck(title, card) {
    decks[title].questions.push(card)
    return Promise.resolve(decks)
}