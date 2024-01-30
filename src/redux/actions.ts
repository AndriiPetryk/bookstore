interface Book {
    id: string;
    name: string;
    price: string;
    category: string;
    description?: string;
}

export const addBook = (book: Book) => ({
    type: 'ADD_BOOK',
    payload: book,
});

export const updateBook = (book: Book) => ({
    type: 'UPDATE_BOOK',
    payload: book,
});

export const deleteBook = (id: string) => ({
    type: 'DELETE_BOOK',
    payload: id,
});
