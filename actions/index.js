import * as c from '../utils/actions.js';
import * as api from '../utils/decksApi';

export function addDeck(newDeck) {
    let deck = { [newDeck]: {
        title: newDeck
    }};  

    return {
        type: c.NEW_DECK,
        deck
    }
}

export function fetchDecks() {
    api.fetchDecks().then( (decks1) => {
 //       console.log("fetch", decks1)
        decks = {
            decks1
        }
        return {
            type: c.GET_DECKS,
            decks
        }
    });
}

export function delDecks() {

    return {
        type: c.DEL_DECKS,
    }
}