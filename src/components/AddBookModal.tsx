import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { addBook } from '../redux/actions';

const AddBookModal: React.FC = () => {
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleAddBook = () => {
        const newBook = {
            id: Date.now().toString(),
            name,
            price,
            category,
            description,
        };
        dispatch(addBook(newBook));
        closeModal();
    };

    return (
        <div>
            <Button variant="primary" onClick={openModal}>Add Book</Button>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={modalIsOpen} onHide={closeModal}>
                    <Modal.Header>
                        <Modal.Title>Add book information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={closeModal}>Close</Button>
                        <Button variant="primary" onClick={handleAddBook}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default AddBookModal;
