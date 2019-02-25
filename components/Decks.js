import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native'
import { getDecks } from '../utils/api'


class Decks extends Component {
    static navigationOptions = {header: null};
    
    // componentDidMount() {
    //     getDecks()
    //         .then
    // }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    {key: 'Julie2'},
                    {key: 'Julie3'},
                    {key: 'Julie4'},
                    {key: 'Julie5'},
                    {key: 'Juliex'},
                    {key: 'Julie6'},
                    {key: 'Julie7'},
                    {key: 'Julie8'},
                    {key: 'Julie9'},
                    {key: 'Julie99'},
                    {key: 'Julie999'},
                    {key: 'Julie11'},
                    {key: 'Julie111'},
                    {key: 'Julie22'},
                    {key: 'Julie222'},
                    {key: 'Julie33'},
                    {key: 'Julie333'},
                    {key: 'Julie44'},
                    {key: 'Julie444'},
                    {key: 'Julie55'},
                    {key: 'Julie555'},
                    {key: 'Julie66'}
                ]}
                renderItem={({item}) => <TouchableOpacity 
                    style={styles.item} 
                    title={item.key}
                    onPress={() => this.props.navigation.navigate('Deck', {
                        title: item.key
                    })}
                    >
                      <Text style={styles.title}>{item.key}</Text>
                      <Text style={styles.subtitle}>0 cards</Text>  
                    </TouchableOpacity>}
                />
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