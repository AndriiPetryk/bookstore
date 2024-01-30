import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux';
import {updateBook} from '../redux/actions';
import Button from "react-bootstrap/Button";

interface BookModalProps {
    book: {
        id: string;
        name: string;
        price: string;
        category: string;
        description?: string;
    },
    handleClose: (...args: any[]) => void;
    isOpen: boolean
}

const BookModal: React.FC<BookModalProps> = ({book, isOpen, handleClose}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(book.name);
    const [price, setPrice] = useState(book.price);
    const [category, setCategory] = useState(book.category);
    const [description, setDescription] = useState(book.description || '');

    const handleUpdate = () => {
        const updatedBook = {
            id: book.id,
            name,
            price,
            category,
            description,
        };
        dispatch(updateBook(updatedBook));
    };

    return (
        <div>
            <div
                className="modal show"
                style={{display: 'block', position: 'initial'}}
            >
                <Modal show={isOpen} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Edit book information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={name}
                                              onChange={(e) => setName(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" value={price}
                                              onChange={(e) => setPrice(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Category" value={category}
                                              onChange={(e) => setCategory(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" value={description}
                                              onChange={(e) => setDescription(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleUpdate}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default BookModal;
