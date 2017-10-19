import { AsyncStorage } from 'react-native'
export const DECKS_STORAGE_KEY = 'UdaciFlashCards:decks'


export function submitEntry(deck) {
        
        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

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

export function getCard(key) {
     return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then( (card) => {
            if(card) {
                let cardData = JSON.parse(card);
                letCardDetails = cardData[key];
                let obj = {
                    [key]: letCardDetails
                };
                return obj;
            }
            return "{}";
        }).catch( (err) => {
            console.log("ERR",err);
    });
}

export function addQuestion(key, question) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
       .then( (cards) => {
           if(cards) {
               let cardData = JSON.parse(cards);
               let cardDetails = cardData[key];
               if(cardDetails.questions === undefined) {
                   cardDetails.questions = [];
               }
               cardDetails.questions.push(question);
               let obj = {
                   [key]: cardDetails
               };
                return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(obj))
             }
           return "{}";
       }).catch( (err) => {
           console.log("ERR",err);
   });
}
