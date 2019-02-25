import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDecks, getDeck, saveDeckTitle, addCardToDeck } from './utils/api'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'

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

export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
