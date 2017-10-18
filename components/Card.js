import React, { Component } from 'react';
import {Text,TextInput, View, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { blue, white, gray, black } from '../utils/colors';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { getDeckCard } from '../actions';

class Card extends Component {

    constructor () {
        super();
        this.state = {
            question: '',
            answer: '',
            cardKey: '',
            cardData: {}
        }
    }

    componentDidMount() {
       const cardKey = this.props.cardKey;
       this.props.dispatch(getDeckCard(cardKey));
    }

    addQuestion =  () => {
        const {question, answer } = this.state;

        let QnA = {
            question: question,
            answer: answer
        };
        
        this.props.dispatch(AddQuestion(this.props.key, QnA));
        
    };

    render() {
        const {question, answer } = this.state;
        const { navigate } = this.props.navigation;
        const { card } = this.props;

        let cardKey = Object.keys(card);

         
        return (
            <View style={styles.container}>
                <Text style={{color: 'blue'}} onPress={() => navigate('Home')}>Home</Text>
                <Text style={styles.headerLabel}>Quiz Questions</Text>
                <Text style={styles.smallLabel}>[ {cardKey} ]</Text>
                <Text style={styles.headerLabel}>Question</Text>
                <TextInput style={styles.inputText} onChangeText={(question) => this.setState({question})} placeholder="Type Here..." underlineColorAndroid="transparent" />           
                <Text style={styles.headerLabel}>Answer</Text>
                <TextInput style={styles.inputText} onChangeText={(answer) => this.setState({answer})}  placeholder="Type Here..." underlineColorAndroid="transparent" />           
                <TouchableOpacity onPress={this.addQuestion.bind()} style={styles.btn}>
                    <Text style={styles.btnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('Cards')} style={styles.btn}>
                    <Text style={styles.btnText}>Cancel</Text>
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
    headerLabel: {
        fontSize: 24,
        marginBottom:10,
        marginTop: 10,
        fontWeight: '600'
    },
    smallLabel: {
        fontSize: 16,
        marginBottom:10,
        marginTop: 5,
        fontWeight: '600'
    },
    quizLabel: {
        fontSize: 22,
        marginBottom: 10
    },
    btn: {
        backgroundColor: blue,
        borderColor: black,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20
    },
    btnText: {
        alignSelf: 'center',
        color: white,
        fontSize: 22,
        marginTop: 3
    
    },
    inputText: {
        fontSize: 22,
        width: 200,
        marginTop: 10,
        marginBottom: 30
    },
});

const mapStateToProps = (state) => {
    return {
        card: state.card,
        cardKey: state.cardKey
    };
};
   
 export default connect(mapStateToProps)(Card);