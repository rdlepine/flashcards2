import React, { Component } from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { blue, white, gray, black, lightBlue, mediumBlue } from '../utils/colors';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Title from './Title';
import { getDecks } from '../utils/decksApi';
import { fetchDecks, clearDecks } from '../actions';
import DECKS_STORAGE_KEY from '../utils/decksApi';

class Decks extends Component {

    componentDidMount() {
        this.props.dispatch(fetchDecks());
    }

    state = {
        opacity: new Animated.Value(0)
    }

    resetDeck = () => {
       Alert.alert("Warning","Delete all Decks?",
       [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.removeDecks()},
      ],
      { cancelable: false });
    }

    removeDecks = () => {
          this.props.dispatch(clearDecks('UdaciFlashCards:decks'));
    }


    render() {
        const { navigate } = this.props.navigation;
        const { opacity } = this.state;

        return (
            <View style={styles.container}>
                <Title />
                <TouchableOpacity style={styles.btnSmall} onPress={this.resetDeck.bind()} style={styles.btnSmall}>
                    <Text style={styles.btnTextSmall} >Reset Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Deck')} style={styles.btn}>
                    <Text style={styles.btnText} >Create New Deck</Text>
                </TouchableOpacity>
                <ScrollView >           
                    {this.props.decks !== undefined && Object.keys(this.props.decks).length > 0
                        ?
                            Object.keys(this.props.decks).map( (deck, key) => (
                            <TouchableOpacity key={key} onPress={() => navigate('Cards')}>    
                                <View style={styles.deck}>
                                    <Text style={[styles.deckItem]}>{deck}</Text>
                                    <Text>{this.props.decks[deck].cards === undefined?0:this.props.decks[deck].cards.length} Cards</Text>
                                    <Text style={styles.smallText}>Click to add Card to deck</Text>
                                </View>
                            </TouchableOpacity>
                            ))      
                        : 
                            <View>
                                <Text>{Object.keys(this.props.decks).length} Cards</Text>
                            </View>
                    }
                </ScrollView>
             </View>
        );
    }

}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        flexGrow: 1
    },
    title: {
        fontSize: 32,
        fontStyle: 'italic',
        marginBottom: 10
    },
    btn: {
        backgroundColor: blue,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginBottom: 20
    },
    btnSmall: {
        backgroundColor: blue,
        width: 100,
        height: 30,
        borderRadius: 20,
        marginBottom: 10
    },
    btnText: {
        alignSelf: 'center',
        color: white,
        fontSize: 22,
        paddingTop: 3
    },
    btnTextSmall: {
        alignSelf: 'center',
        color: white,
        fontSize: 16,
        paddingTop: 3
    },
    deck: {
        height: 90,
        marginBottom: 5,
        backgroundColor: lightBlue,
        borderBottomColor: gray,
        borderRightColor: gray,
        borderBottomWidth: 2.5,
        borderRightWidth: 2.5,
        width: 250,
        alignItems: 'center'
    },
    deckItem: {
        fontSize: 28
    },
    smallText: {
        fontSize: 10,
        marginTop: 3
    }
});

const mapStateToProps = (state) => {
    return {
        decks: state.decks
    };
};
   
 export default connect(mapStateToProps)(Decks);

