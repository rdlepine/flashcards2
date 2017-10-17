import React, { Component } from 'react';
import {Text, View, ScrollView, TouchableOpacity, StyleSheet, Animated, Alert } from 'react-native';
import { blue, white, gray, black } from '../utils/colors';
import { NavigationOptions } from 'react-navigation'

class Cards extends Component {

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text style={{color: 'blue', fontSize: 16, marginBottom: 10}} onPress={() => navigate('Home')}>Home</Text>
                <Text style={styles.headerLabel}>Card Questions</Text>
                <TouchableOpacity onPress={() => navigate('Card')} style={styles.btn}>
                    <Text style={styles.btnText}>Add Question</Text>
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
    btnText: {
        alignSelf: 'center',
        color: white,
        fontSize: 22,
        marginTop: 3
    
    }
});

export default Cards;