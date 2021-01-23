import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import Modal from 'react-modal';
import ModalLog from './ModalLog';
import './modal.css'
const Header = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (value) => {
        setModalOpen(value);
    }

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav></Nav>
                    <Form inline>
                        <Button variant="outline-primary" onClick={() => { openModal(true) }}>Entrar</Button>
                    </Form>
                </Container>
            </Navbar>
            <div className="Responsive">
                <Modal
                    isOpen={isModalOpen}
                    ariaHideApp={false}
                    className="Modal"
                >
                    <Container>
                        <Row>
                        <Col md={{ span: 1, offset: 10 }}>
                            <Button onClick={() => closeModal()} id="close" variant="outline-danger">X</Button>
                        </Col>
                           <Col md={{ span: 8, offset: 2 }}>
                            <ModalLog></ModalLog>
                            </Col>
                        </Row>
                    </Container>

                </Modal>
            </div>

        </div>
    )
}

export default Header
