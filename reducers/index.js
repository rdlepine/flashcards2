import * as c from '../utils/actions.js';
import { combineReducers } from 'redux';

function decks(state = {}, action) {
    switch (action.type) {
        case c.GET_DECKS:
             return JSON.parse(action.decks);
        case c.NEW_DECK:
             return {...state, ...action.deck }  
        case c.DEL_DECKS:
             return {};
        default:
            return state;
    }
}

function card(state = {}, action) {
    switch (action.type) {
        case c.SET_CARD:
            return action.card;
        case c.GET_CARD:
            return action.card; 
         default:
            return state;
    }
}

function cardKey(state = '', action) {
    switch(action.type) {
        case c.SET_CARD_KEY:
            return action.key
        default:
            return state;
    }    
}

function quizStatus(state = {}, action) {
    switch(action.type) {
        case c.SET_QUIZ_STATUS:
            return action.status
        default:
            return state;
    }    
}

const rootReducer = combineReducers( {
    decks,
    card,
    cardKey, 
    quizStatus
}); 

export default rootReducer; 