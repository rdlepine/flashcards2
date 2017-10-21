import React, { Component } from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet, Animated, Easing, Alert } from 'react-native';
import { blue, white, gray, black, lightBlue, mediumBlue } from '../utils/colors';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Title from './Title';
import { getDecks } from '../utils/decksApi';
import { fetchDecks, clearDecks, getDeckCard, setCardKey, getQuizStatus } from '../actions';
import DECKS_STORAGE_KEY from '../utils/decksApi';

class Decks extends Component {

    componentDidMount() {
        this.props.dispatch(fetchDecks());
        this.props.dispatch(getQuizStatus());
        
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

    getCard = (deck, event) => {  
        const { navigate } = this.props.navigation;
        this.props.dispatch(setCardKey(deck));
        navigate('Cards');
    }    
 
    render() {
        const { navigate } = this.props.navigation;
        const { opacity } = this.state;
        
        let lastQuiz = '';
        if(this.props.quizStatus["lastQuiz"] !== undefined) {
              lastQuiz = this.props.quizStatus["lastQuiz"].time;
        } else {
             lastQuiz = 'No quizes taken';
         }
    

        return ( 
            <View style={styles.container}>
                <Title />
                 <Text style={{color: 'blue', fontSize: 18, marginBottom: 15}} onPress={this.resetDeck.bind()} >Reset Deck</Text>
                 <TouchableOpacity onPress={() => navigate('Deck')} style={styles.btn}>
                    <Text style={styles.btnText} >Create New Deck</Text>
                </TouchableOpacity>
                <Text style={{marginBottom: 15}}>Last Quiz Taken: {lastQuiz}</Text>
                 <ScrollView >           
                    {this.props.decks !== undefined && Object.keys(this.props.decks).length > 0
                        ?
                            Object.keys(this.props.decks).map( (deck, key) => (
                                <TouchableOpacity key={key} onPress={this.getCard.bind(this, deck)}>    
                                    <View style={[styles.deck]}>
                                        <Text style={[styles.deckItem]}>{this.props.decks[deck].title}</Text>
                                        <Text>{this.props.decks[deck].questions === undefined?0:this.props.decks[deck].questions.length} Card(s)</Text>
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
        marginBottom: 15
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
        fontSize: 18
    },
    smallText: {
        fontSize: 10,
        marginTop: 3
    }
});

const mapStateToProps = (state) => {
    return {
        decks: state.decks,
        quizStatus: state.quizStatus
    };
};
   
 export default connect(mapStateToProps)(Decks);

