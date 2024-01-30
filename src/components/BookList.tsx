import React from 'react';
import { useSelector } from 'react-redux';

import BookListItem from './BookListItem';
import {RootState} from "../redux/reducers";
import {IBook} from "../models/IBook";

const BookList: React.FC = () => {
    const books: IBook[] = useSelector((state: RootState) => state.books);

    return (
        <div className="mt-5">
            <h2>Book List</h2>
            {books.map((book: IBook) => (
                <BookListItem key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
