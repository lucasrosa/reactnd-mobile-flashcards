import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationActions } from 'react-navigation';


class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Deck'),
        };
    };
    render() {
        
        const { navigation } = this.props
        const deck = navigation.getParam('deck', 'Deck')
        const title = deck.title
        const cardsCount = deck.questions.length

        return (
            <View style={styles.item} >
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{cardsCount} cards</Text>
                </View> 
                <View style={styles.buttonContainer}>
                    <View style={styles.singleButtonContainer}>
                        <Button 
                            style={styles.button} 
                            title='Add card'
                            onPress={() => this.props.navigation.navigate('AddCard', {
                                deck,
                                handleAddCard: this.props.screenProps.handleAddCard
                            })}
                            >
                        </Button>
                    </View>
                    <View style={styles.singleButtonContainer}>
                        <Button 
                            style={styles.button} 
                            title='Start quiz'
                            onPress={() => this.props.navigation.navigate('Quiz')}
                            >
                        </Button>  
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        paddingTop: 40,
        fontSize: 36
    },
    subtitle: {
        fontSize: 28,
        color: 'gray'
    },
    buttonContainer: {
        paddingTop: 200
    },
    singleButtonContainer: {
        paddingTop: 20
    }
  })

export default Deck