import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NavigationActions } from 'react-navigation';


class Quiz extends Component {
    state = {
        currentQuestion: 0,
        correctQuestions: 0
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Quiz"
        };
    };
    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Text>2/2</Text>
                <View style={styles.item} >
                    <View  style={styles.textView} >
                        <Text>oi!</Text>
                    </View>
                    <View style={styles.singleButtonContainer}>
                        <Button style={styles.correctButton} color='green' title='Correct'></Button>  
                    </View>
                    <View style={styles.singleButtonContainer}>
                        <Button style={styles.incorrectButton} color='red' title='Incorrect'></Button>  
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
        paddingTop: 200,
        alignItems: 'center',
    },
    textView: {
        paddingTop: 20
    },
    correctButton: {
        backgroundColor: 'green'
    },
    incorrectButton: {
        backgroundColor: 'red'
    },
    singleButtonContainer: {
        paddingTop: 20,
        width:250
    }
  })

export default Quiz