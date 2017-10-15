import * as c from '../utils/actions.js';
import { combineReducers } from 'redux';

function decks(state = {}, action) {
    switch (action.type) {
        case c.GET_DECKS:
            return state;
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
        case c.GET_CARD:
            return action.card;        
        default:
            return state;
    }
}

const rootReducer = combineReducers( {
    decks,
    card
}); 

export default rootReducer;