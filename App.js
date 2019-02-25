import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createEntry, submitEntry, fetchDeckResults, decks, getDecks, getDeck, saveDeckTitle, addCardToDeck } from './utils/api'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

const DeckStack = createStackNavigator({
  Decks: {
    screen: Decks, 
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      tabBarLabel: 'Deck'
    }
   },
   AddCard : {
    screen: AddCard,
    navigationOptions: {
      tabBarLabel: 'Add Card'
    }
   },
   Quiz : {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Quiz'
    }
   }
});

const TabNavigator = createMaterialTopTabNavigator ({
  DeckStack,
  NewDeck: {
    screen: NewDeck, 
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
},{
  style: {
    height: 800
  }
}) 


const AppContainer = createAppContainer(TabNavigator)

export default class App extends React.Component {
  state = {
    
  }

  handleAddDeck = (title, callback) => {
    const entry = {questions:[], title}
  
    submitEntry({key: title, entry}).then(() => {
        let currentDecks = this.state.decks
        currentDecks[title] = entry
        this.setState({ decks: currentDecks })
        callback()
    })
  }

  componentDidMount() {
    createEntry(decks).then(() => {
      // submitEntry({key: "pokato", entry: "lambato"}).then(() => {
      //   console.log("loida")
        fetchDeckResults().then((data) => {
          this.setState({decks: JSON.parse(data)})
          //console.log("doida", data)
        })
      // })
    })
  }
  render() {
    return <AppContainer 
      screenProps={{decks: this.state.decks, handleAddDeck: this.handleAddDeck}}
      //handleAddDeck={this.handleAddDeck}
    />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
