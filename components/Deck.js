import React, { Component } from 'react';
import {Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { blue, white, gray, black } from '../utils/colors';
import Title from './Title';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { NavigationOptions } from 'react-navigation';
import { submitEntry } from '../utils/decksApi';

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
       submitEntry(deck);
       this.props.addDeck(deck);
       navigate('Home');
    };
      
    getCards() {

    }

    render() {

        return (
            <View style={styles.container}>
                <Title />
                <Text style={styles.label}>Deck Title</Text>
                <TextInput id="deck" style={styles.input} onChangeText={(deck) => this.setState({deck})}  autoFocus={true} underlineColorAndroid="transparent"  placeholder="Type Here..." />
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
        fontSize: 22
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

const mapDispatchToProps = (dispatch) => {
    return {
       addDeck: (deck) => dispatch(addDeck(deck)),
       getDeck: () => dispatch(getDeck())
   };
};
  
export default connect(mapStateToProps,mapDispatchToProps)(Deck);
