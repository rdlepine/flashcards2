import React, { Component } from 'react';
import {Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { blue, white, gray, black } from '../utils/colors';
import Title from './Title';
import { connect } from 'react-redux';
import { addDeck, setCardKey } from '../actions';
import { NavigationActions } from 'react-navigation';
import { submitEntry } from '../utils/decksApi';
import * as utils from '../utils/routines';

class Deck extends Component {

    state = {
        deck: ''
    }
    

    addDeck = () => {
      const { deck } = this.state;
      const { navigate } = this.props.navigation;
    
       if(deck.trim().length === 0) {
           Alert.alert("Deck Required");
           return;
       }

       let key = utils.escapeRegExp(deck);
       const newDeck = {
           [key]: {
               title: deck
           }
       }
       submitEntry(newDeck);
       this.props.dispatch(addDeck(newDeck));
       this.props.dispatch(setCardKey(utils.escapeRegExp(deck)));
       navigate('Cards');
     };
      
    getCards() {

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{color: 'blue', fontSize: 16, marginBottom: 10}} onPress={() => navigate('Home')}>Home</Text>
                <Text style={styles.label}>Deck Title</Text>
                <TextInput style={styles.input} onChangeText={(deck) => this.setState({deck})} autoFocus={true} underlineColorAndroid="transparent"  placeholder="Type Here..." />
                <TouchableOpacity style={styles.btn} onPress={this.addDeck.bind()}>
                   <Text style={styles.btnText} >Add Deck</Text>
                </TouchableOpacity>
             </View>
        );
    }

}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 10
    },
    btn: {
        backgroundColor: blue,
        borderColor: black,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginBottom: 20
    },
    btnText: {
        alignSelf: 'center',
        color: white,
        fontSize: 22,
        marginTop: 3
      
    },
    label: {
        fontSize: 28
    },
    input: {
        fontSize: 22,
        width: 200,
        marginTop: 10,
        marginBottom: 30
    },
});

const mapStateToProps = (state) => {
    return {
        deck: state.deck
    };
};

  
export default connect(mapStateToProps)(Deck);
