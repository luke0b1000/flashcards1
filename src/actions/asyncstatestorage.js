import { showLoading, hideLoading } from "./loading";
import { setInitialData } from "../utils/AsyncStorage";

export const SYNC_ASYNC_DATA = "SYNC_ASYNC_DATA";
export const NEW_DECK_TITLE = "NEW_DECK_TITLE";
export const NEW_CARD = "NEW_CARD";

export function syncAsyncWithState(asyncObj) {
    return {
        type: SYNC_ASYNC_DATA,
        flashcardsObj: asyncObj
    };
}

export function newDeckTitle(deckTitle) {
    return {
        type: NEW_DECK_TITLE,
        deckTitle
    };
}

export function handleInitialData() {
    return dispatch => {
        dispatch(showLoading());
        return setInitialData().then(asyncObj => {
            dispatch(syncAsyncWithState(asyncObj));
            dispatch(hideLoading());
        });
    };
}
