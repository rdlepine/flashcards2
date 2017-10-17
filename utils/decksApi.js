import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFlashCards:decks'


export function submitEntry(deck) {
        
        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

// export function removeEntry(key) {
//     return AsyncStorage.getItem(DECKS_STORAGE_KEY)
//         .then( (results) => {
//             const data = JSON.parse(results);
//             data[key] = undefined;
//             AsyncStorage,setItem(DECKS_STORAGE_KEY, HSIB,stringify(data));
//         })
// }

export function addDeck(deck) {
    let newDeck = {
       [deck]: deck
    }

    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck));
}

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then( (decks) => {
             if(decks) {
                 return decks;
            }
            return "{}";
        }).catch( (err) => {
            console.log("ERR",err);
        });
}

export function clearDecks(key) { 
  

    return AsyncStorage.removeItem(key)
        .then( () => {
             return {};
        }).catch( (err) => {
            console.log(err);
        });
}
