import React, { Component } from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { blue, white, gray, black, green } from '../utils/colors';
import { NavigationOptions } from 'react-navigation'
import { connect } from 'react-redux';
import { getDeckCard } from '../actions';

class Cards extends Component {

    componentDidMount() {
        const cardKey = this.props.cardKey;
        this.props.dispatch(getDeckCard(cardKey));
     }
 
    startQuiz = () => {
        const { navigate } = this.props.navigation;
        const { cardKey, card } = this.props;
        if(card[cardKey] === undefined || card[cardKey].questions === undefined) {
            Alert.alert("No Card to Quiz");
        }

        navigate('Quiz');
    } 

    getCardCount = () => {
        
        const { cardKey, card } = this.props;
        if(card === undefined ||
          card[cardKey] === undefined ||
          card[cardKey].questions == undefined
        ) {
            return 0;
        } else {
            return card[cardKey].questions.length;
        }
    }
   
    render() {

        const { navigate } = this.props.navigation;
        const { cardKey, card } = this.props;
        let title = '';
        let count = 0;
        if(card[cardKey] !==  undefined) {
            title = card[cardKey].title;
        }

        return (
            <View style={styles.container}>
                <Text style={{color: 'blue', fontSize: 22, marginBottom: 10}} onPress={() => navigate('Home')}>Home</Text>
                <Text style={styles.headerLabel}>{title}</Text>
                <Text style={{marginBottom: 20, fontSize: 22}}>{this.getCardCount()} Card(s)</Text>
                <TouchableOpacity onPress={() => navigate('Card')} style={styles.btn}>
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGo} onPress={this.startQuiz.bind(this)} disabled={card[cardKey] === undefined || card[cardKey].questions === undefined?true:false}>
                    <Text style={styles.btnText}>Start Quiz</Text>
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
        fontSize: 22,
        marginBottom: 10
    },
    btn: {
        backgroundColor: blue,
        borderColor: black,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginBottom: 20
    },
    btnGo: {
        backgroundColor: green,
        borderColor: black,
        width: 200,
        height: 40,
        borderRadius: 100,
        marginBottom: 20
    },
    btnText: {
        marginTop: 20,
        alignSelf: 'center',
        color: white,
        fontSize: 22,
        marginTop: 3
    
    }
});

const mapStateToProps = (state) => {
    return {
        card: state.card,
        cardKey: state.cardKey
    };
};
   
 export default connect(mapStateToProps)(Cards);