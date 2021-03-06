import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks';
import Deck from './components/Deck';
import Cards from './components/Cards';
import Card from './components/Card';
import Quiz from './components/Quiz';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux'
import { lightBlue, blue, white, gray } from './utils/colors';
import { StackNavigator } from 'react-navigation';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import thunk from 'redux-thunk';
import { setLocalNotification, clearNotifications} from './utils/notifications';


const Stack = StackNavigator({
  Home: {
    screen: Decks,
    navigationOptions: {
      title: "Home",
      headerStyle: { marginTop: 10},
      headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Add Deck",
      headerStyle: { marginTop: 10},
      headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
    },
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      title: "Cards",
      headerStyle: { marginTop: 10},
      headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
    },
  },
  Card: {
    screen: Card,
    navigationOptions: {
      title: "Card",
      headerStyle: { marginTop: 10},
      headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerStyle: { marginTop: 10},
      headerTitleStyle: { fontSize: 22, fontWeight: '600', textAlign: 'center', marginTop: 10},
    },
  }   
})

export default class App extends React.Component {

  componentDidMount() {
    clearNotifications();
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <Stack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontStyle: 'italic',
    fontWeight: '700',
    marginTop: 40
  }
});
