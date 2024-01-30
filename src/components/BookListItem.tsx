import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

import {deleteBook} from '../redux/actions';
import BookModal from './BookModal';

interface BookListItemProps {
    book: {
        id: string;
        name: string;
        price: string;
        category: string;
        description?: string;
    };
}

const BookListItem: React.FC<BookListItemProps> = ({book}) => {
    const dispatch = useDispatch();
    const [isOpen, setOpen] = useState(false);

    const handleDelete = () => {
        dispatch(deleteBook(book.id));
    };

    const handleOpen = () => setOpen(true)
    const handleClose = (event: any) => {
        event && event.stopPropagation()
        setOpen(false)
    }

    return (
        <div>
            <Card className="mb-5" onClick={handleOpen}>
                <Card.Body>
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{book.category}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">${book.price}</Card.Subtitle>
                    <Card.Text>
                        {book.description}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <ButtonGroup className="me-2" aria-label="First group">
                        <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </ButtonGroup>
                    <ButtonGroup aria-label="Second group">
                        <BookModal book={book} handleClose={handleClose} isOpen={isOpen}/>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookListItem;
