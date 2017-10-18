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

export function addQuestion(key, question) {

}

export function setCard(card) {
    return {
        type: c.SET_CARD,
        card
    }
}

export function getDeckCard(deck) {
     return (dispatch) => {
        api.getCard(deck).then( (card) => {
              dispatch(setCard(card));
            }).catch((err) => {
                console.log("ERR", err);
            });
       }
}

export function setCardKey(key) {
    return {
        type: c.SET_CARD_KEY,
        key
    }
}