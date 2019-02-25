import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { NavigationActions } from 'react-navigation';


class NewDeck extends Component {
    state = {
        deckTitle: ""
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: "New Deck"
        };
    };
    handleNewDeck = () => {
        this.props.navigation.handleAddDeck()
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.item} >
                <Text>What is the deck title?</Text>
                <View  style={styles.textView} >
                    <TextInput
                        style={{height: 40, width:400,  borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(deckTitle) => this.setState({deckTitle})}
                        value={this.state.deckTitle}
                    />
                </View>
                <View style={styles.singleButtonContainer}>
                    <Button 
                        style={styles.button} 
                        title='Submit'
                        onPress={this.handleNewDeck}
                        ></Button>  
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
        paddingTop: 200,
        alignItems: 'center',
    },
    textView: {
        paddingTop: 20
    },
    title: {
        paddingTop: 40,
        fontSize: 36
    },
    subtitle: {
        fontSize: 28,
        color: 'gray'
    },
    singleButtonContainer: {
        paddingTop: 20,
        width:250
    }
  })

export default NewDeck