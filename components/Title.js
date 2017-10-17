import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { blue } from '../utils/colors';

class Title extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Udacity QuizMe</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        fontStyle: 'italic',
        color: blue
    }
})

export default Title;