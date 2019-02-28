import React, { Component } from 'react'
import { StatusBar, View, TouchableOpacity, Text, StyleSheet, FlatList, Alert } from 'react-native'
import { fetchLastDayStudied, getCurrentDay } from '../utils/api'


class Decks extends Component {
    static navigationOptions = {header: null}

    render() {
        const { decks } = this.props.screenProps
        if (!decks) {
            return <View></View>
        } else {
            
            let decksArray = []
            for (let key in decks) {
                decksArray.push({key, deck: decks[key]});
            }

            fetchLastDayStudied().then((data) => {
                const currentDay = getCurrentDay()
                const dataJSON = JSON.parse(data)

                if (!dataJSON || !dataJSON.lastDayStudied || dataJSON.lastDayStudied != currentDay) {
                    Alert.alert(
                        'Notification',
                        'You have not studied today. Open a deck and start learning!',
                        [
                          {text: 'OK'},
                        ],
                        {cancelable: false}
                    );
                }
            })
            
            return (
                <View style={styles.container}>
                    <StatusBar hidden={true}/>
                    <FlatList
                    data={decksArray}
                    renderItem={({item}) => <TouchableOpacity 
                        style={styles.item} 
                        title={item.deck.title}
                        onPress={() => this.props.navigation.navigate('Deck', {
                            deck: item.deck,
                            handleAddDeck: this.props.screenProps.handleAddDeck
                        })}
                        >
                        <Text style={styles.title}>{item.deck.title}</Text>
                        <Text style={styles.subtitle}>{item.deck.questions.length} cards</Text>  
                        </TouchableOpacity>}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
        padding: 10,
        height: 200,
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    title: {
        paddingTop: 40,
        fontSize: 26
    },
    subtitle: {
        fontSize: 18,
        color: 'gray'
    }
  })

export default Decks