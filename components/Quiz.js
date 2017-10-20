import React, { Component } from 'react';
import {Text,TextInput, View, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { blue, white, gray, black, lightBlue, mediumBlue, red, green } from '../utils/colors';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { getDeckCard } from '../actions';
import * as utils from '../utils/routines';
import { setLastQuizCompleteTime } from '../utils/decksApi';

class Quiz extends Component {
    constructor() {
        super();

        this.state = {
            quizQuestion: 0,
            correctAnswers: 0,
            qora: true,
            score: ''
        }

    }

    setResult = (result, event) => {
        let { correctAnswers , quizQuestion} = this.state;
        this.setState({correctAnswers: correctAnswers + result})
        this.setState({quizQuestion: quizQuestion + 1})
    }

    setQorA = () => {
        this.setState({qora: !this.state.qora});
    }

    componentDidMount() {
       const cardKey = this.props.cardKey;
       this.props.dispatch(getDeckCard(cardKey));
    }

    getScore = (a, b, event) => {
        const score = Math.floor((a / b) * 100);  
        const strScore = `${score}%`;

        const dt = utils.formatDate(new Date());
        setLastQuizCompleteTime(dt);

        return strScore;
    }

    render() {
        const { navigate } = this.props.navigation;
        const { cardKey, card } = this.props;
        const { quizQuestion, qora, correctAnswers, score } = this.state;
    
        let quizLength = 0;
        let title = '';
        if(card !== undefined && card[cardKey] !== undefined) {
            quizLength = card[cardKey].questions.length;
            title = card[cardKey].title;
        }

   
        return (
            <View style={styles.container}>
                <Text style={{color: 'blue', fontSize: 22}} onPress={() => navigate('Home')}>Home</Text>
                <Text style={styles.headerLabel}>Quiz</Text>
                <Text style={styles.headerLabel}>Deck {title}</Text>
                {quizQuestion < quizLength?
                    <View style={styles.container}>
                        <Text style={styles.headerLabel}>Question {quizQuestion + 1} of {quizLength}</Text>
                        <View style={styles.card}>
                         <Text style={styles.headerLabel}>{qora === true?card[cardKey].questions[quizQuestion].question:card[cardKey].questions[quizQuestion].answer}</Text>
                        </View>
                        <Text style={styles.linkLabel} onPress={this.setQorA.bind(this)}>{qora === false?'Question':'Answer'}</Text>
                        <TouchableOpacity style={styles.btnGo}  onPress={this.setResult.bind(this, 1)}>
                            <Text style={styles.btnText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnErr} onPress={this.setResult.bind(this, 0)}>
                            <Text style={styles.btnText}>Incorrect</Text>
                        </TouchableOpacity>
                     </View>
                :
                    <View style={styles.container}>
                        <Text style={{fontSize: 32}}>{correctAnswers} of {quizLength } Correct {this.getScore(correctAnswers, quizLength)}</Text>
                        <Text style={correctAnswers === quizLength?styles.goodJob:styles.studyMore}>{correctAnswers === quizLength?'Good Job!':'Need to Study!'}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => {this.setState({quizQuestion: 0, correctAnswers: 0})}}>
                            <Text style={styles.btnText}>Re-Start Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => navigate('Cards')}>
                            <Text style={styles.btnText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                }

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
    goodJob: {
        fontSize: 32,
        color: green,
        fontWeight: '600',
        fontStyle: 'italic'
    },
    studyMore: {
        fontSize: 32,
        color: red,
        fontWeight: '600'
    },
    card: {
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
    linkLabel: {
        fontSize: 28,
        color: blue,
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
    btnGo: {
        backgroundColor: green,
        borderColor: black,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 10
    },
    btnErr: {
        backgroundColor: red,
        borderColor: black,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginTop: 5,
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
   
 export default connect(mapStateToProps)(Quiz);