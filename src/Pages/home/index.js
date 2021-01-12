import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from '../../components/header'
import './index.css'
import Panel from '../../img/friend.svg'
import Book from '../../img/book.svg'
import Star from '../../img/star.svg'
import Cube from '../../img/Cube.svg'
const Index = () => {
    return (
        <div>
            <Header></Header>
            <div className="panel">
                <Container>
                    <Row className="justify-content-md-center">
                        <img src={Panel} className="img" />
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className="justify-content-center">
                    <div className="title">
                        <h1>Docente em Foco</h1>
                    </div>
                </Row>
                <hr className="line" />
            </Container>
            <Container className="about">
                <Row >
                    <Col xs={12} md={4}>
                        <Card className="card">
                            <Card.Img variant="top" src={Book} className="book"/>
                            <Card.Body>
                                <Card.Title>
                                    LOREN INPSUN
                            </Card.Title>
                                <Card.Text>
                                    In commodo purus eget tortor
                                    eleifend ultricies. Nulla elit elit,
                                    consequat id ex nec, aliquam
                                    convallis orci. Donec bibendum
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} md={4}>
                    <Card className="card">
                            <Card.Img variant="top" src={Star} />
                            <Card.Body>
                                <Card.Title>
                                    LOREN INPSUN
                            </Card.Title>
                                <Card.Text>
                                    In commodo purus eget tortor
                                    eleifend ultricies. Nulla elit elit,
                                    consequat id ex nec, aliquam
                                    convallis orci. Donec bibendum
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} >
                    <Card className="card">
                            <Card.Img variant="top" src={Cube} />
                            <Card.Body>
                                <Card.Title>
                                    LOREN INPSUN
                            </Card.Title>
                                <Card.Text>
                                    In commodo purus eget tortor
                                    eleifend ultricies. Nulla elit elit,
                                    consequat id ex nec, aliquam
                                    convallis orci. Donec bibendum
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Index
