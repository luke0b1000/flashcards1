import { SYNC_ASYNC_DATA, NEW_DECK_TITLE } from "../actions/asyncstatestorage";

export default function asyncStateStorage(state = {}, action) {
    switch (action.type) {
        case SYNC_ASYNC_DATA:
            return action.flashcardsObj;
        case NEW_DECK_TITLE:
            return {
                ...state,
                [action.deckTitle]: {
                    title: [action.deckTitle]
                }
            }
        default:
            return state;
    }
}
