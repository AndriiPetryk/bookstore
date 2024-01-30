import React from 'react';
import { Provider } from 'react-redux';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import store from './redux/store';
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal';
import './App.css';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Navbar expand="lg" className="justify-content-between" bg='secondary' variant='dark'>
                <Container>
                    <Navbar.Brand>Bookstore</Navbar.Brand>
                    <AddBookModal />
                </Container>
            </Navbar>
            <Container>
                <BookList />
            </Container>
        </Provider>
    );
};

export default App;
