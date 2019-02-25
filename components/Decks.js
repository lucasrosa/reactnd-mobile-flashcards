import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native'
import { getDecks } from '../utils/api'


class Decks extends Component {
    static navigationOptions = {header: null};
    
    componentDidMount() {
        //console.log("asd", this.props.screenProps.decks);
    }
    cocoBongo = () => {
        console.log("coco bongo")
    }

    render() {
        const { decks } = this.props.screenProps
        if (!decks) {
            return <View></View>
        } else {
            //decksArray = Object.values(decks)
            let decksArray = []
            for (let key in decks) {
                decksArray.push({key, deck: decks[key]});
            }
            console.log("dee", decksArray);
            return (
                <View style={styles.container}>
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