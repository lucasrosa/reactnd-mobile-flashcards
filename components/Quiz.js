import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'
import { NavigationActions } from 'react-navigation';


class Quiz extends Component {
    state = {
        currentQuestionId: 0,
        correctQuestions: 0,
        showAnswer: false,
        deck: {}
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Quiz"
        };
    };
    handleCorrectQuestion = () => {
        const { correctQuestions, currentQuestionId } = this.state
        this.setState({ 
            correctQuestions: correctQuestions + 1,
            currentQuestionId: currentQuestionId + 1,
            showAnswer: false
        })
    }

    handleIncorrectQuestion = () => {
        const { currentQuestionId } = this.state
        this.setState({ 
            currentQuestionId: currentQuestionId + 1,
            showAnswer: false
        })
    }

    componentDidMount() {
        const deck = this.props.navigation.getParam('deck', 'Deck')
        this.setState({deck})
    }

    render() {
        const { currentQuestionId, deck, showAnswer } = this.state
        
        const totalNumberOfQuestions = deck.questions ? deck.questions.length : 0


        if (!deck.questions || deck.questions.length === 0) {
            return (
                <View style={styles.item} >
                    <Text style={styles.currentQuestionCounterText}>This deck has no cards yet.</Text>
                </View>
            )
        } else if (currentQuestionId === totalNumberOfQuestions) {
            const { correctQuestions } = this.state 
            return (
                <View style={styles.item} >
                    <Text style={styles.currentQuestionCounterText}>Finished! You got {correctQuestions} correct out of {totalNumberOfQuestions} questions!</Text>
                </View>
            )
        } else {
            const currentQuestion = deck.questions ? deck.questions[currentQuestionId].question : ""
            const currentAnswer = deck.questions ? deck.questions[currentQuestionId].answer : ""
            const textToShow = showAnswer ? currentAnswer : currentQuestion
            const textToButton = showAnswer ? "Question" : "Answer"
            return (
                <View>
                    <View style={styles.currentQuestionCounter}>
                        <Text style={styles.endText}>{currentQuestionId}/{totalNumberOfQuestions}</Text>
                    </View>
                    <View style={styles.item} >
                        <View style={styles.textView} >
                            <Text style={styles.text}>{textToShow}</Text>
                        </View>
                        <View style={styles.switchView} >
                            <TouchableHighlight onPress={() => {this.setState({showAnswer: !showAnswer})}}>
                                <Text style={styles.switchText} >{textToButton}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.singleButtonContainer}>
                            <Button 
                                style={styles.correctButton} 
                                color='green' 
                                title='Correct'
                                onPress={this.handleCorrectQuestion}
                                >
                            </Button>  
                        </View>
                        <View style={styles.singleButtonContainer}>
                            <Button 
                                style={styles.incorrectButton} 
                                color='red' 
                                title='Incorrect'
                                onPress={this.handleIncorrectQuestion}
                                >
                            </Button>  
                        </View>
                    </View>
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
        padding: 20,
        paddingTop: 100,
        alignItems: 'center',
    },
    switchView: {
        alignItems: 'center'
    },
    switchText : {
        color: 'red',
        fontSize: 20
    },
    textView: {
        paddingTop: 20
    },
    endText: {
        padding: 20,
        fontSize: 30
    },
    text: {
        padding: 20,
        fontSize: 32
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
    },
    currentQuestionCounter : {
        padding: 15
    },
    currentQuestionCounterText : {
        fontSize: 20
    }

  })

export default Quiz