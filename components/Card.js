import React, { Component } from 'react';
import {Text,TextInput, View, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { blue, white, gray, black } from '../utils/colors';
import { NavigationActions } from 'react-navigation';

class Card extends Component {

    state = {
        question,
        answer
    }

    componentDidMount() {

    }

    addQuestin(question, answer) {

    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{color: 'blue'}} onPress={() => navigate('Home')}>Home</Text>
                <Text style={styles.headerLabel}>Quiz Questions</Text>
                <Text style={styles.headerLabel}>Question</Text>
                <TextInput style={styles.inputText}  placeholder="Type Here..." />           
                <Text style={styles.headerLabel}>Answer</Text>
                <TextInput style={styles.inputText}  placeholder="Type Here..." />           
                <TouchableOpacity onPress={() => navigate('Cards')} style={styles.btn}>
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

export default Card;