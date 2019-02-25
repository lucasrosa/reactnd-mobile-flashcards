import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { NavigationActions } from 'react-navigation';


class AddCard extends Component {
    state = {
        question: "Question",
        answer: "Answer",
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Add Card"
        };
    };
    render() {
        const { navigation } = this.props;
        const title = navigation.getParam('title', 'Deck');

        return (
            <View style={styles.item} >
                <View  style={styles.textView} >
                    <TextInput
                        style={{height: 40, width:400,  borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(question) => this.setState({question})}
                        value={this.state.question}
                    />
                </View>
                <View  style={styles.textView} >
                    <TextInput
                        style={{height: 40, width:400,  borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(answer) => this.setState({answer})}
                        value={this.state.answer}
                    />
                </View>
                <View style={styles.singleButtonContainer}>
                    <Button style={styles.button} title='Submit'></Button>  
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

export default AddCard