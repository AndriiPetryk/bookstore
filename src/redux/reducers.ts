import { combineReducers } from 'redux';
import Books from "../data/db";
import {IBook} from "../models/IBook";

interface Action {
    type: string;
    payload: IBook;
}

const books = (state: IBook[] = Books, action: Action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, action.payload];
        case 'UPDATE_BOOK':
            return state.map(book => (book.id === action.payload.id ? action.payload : book));
        case 'DELETE_BOOK':
            // @ts-ignore
            return state.filter(book => book.id !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    books,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
