import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Nav></Nav>
                    <Form inline>
                        <Button variant="outline-primary">Entrar</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
