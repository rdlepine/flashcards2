import * as c from '../utils/actions.js';
import * as api from '../utils/decksApi';

export function addDeck(deck) {
 
    return {
        type: c.NEW_DECK,
        deck
    }
}

export function setDecks(decks) {
    return {
        type: c.GET_DECKS,
        decks
    }
}

export function fetchDecks() {
     return (dispatch) => {
         api.getDecks().then( (decks) => {
                 dispatch(setDecks(decks));
             }).catch((err) => {
                 console.log("ERR", err);
             });
        }
}

export function clearDecks(key) {
      return (dispatch) => {
        api.clearDecks(key).then( () => {
               dispatch(delDecks());
            });
       }
}


export function delDecks() {

    return {
        type: c.DEL_DECKS,
    }
}