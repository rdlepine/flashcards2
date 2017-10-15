import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFlashCards:decks'


export function submitEntry({entry, key}) {
        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify( {
    }));
}

export function removeEntry() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then( (results) => {
            const data = JSON.parse(results);
            data[key] = undefined;
            AsyncStorage,setItem(DECKS_STORAGE_KEY, HSIB,stringify(data));
        })
}

export function addDeck(deck) {
    console.log(deck);
    let newDeck = {
        [deck]: deck
    }

 //  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck));
}

export function fetchDecks() {
     return AsyncStorage.getItem(DECKS_STORAGE_KEY)
           .then( (decks) => {
                return decks;
           });
}
