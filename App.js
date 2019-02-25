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
handleAddDeck = () => {
  console.log("oas")
}
const TabNavigator = createMaterialTopTabNavigator ({
  DeckStack,
  NewDeck: {
    screen: NewDeck, 
    navigationOptions: {
      tabBarLabel: 'New Deck',
        handleAddDeck
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
    return <AppContainer screenProps={{
      decks: this.state.decks,
      handleAddDeck
    }} />;
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
