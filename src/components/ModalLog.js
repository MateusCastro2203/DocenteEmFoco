import React, { useState, UseEfect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './ModalLog.css';

const ModalLog = () => {

    const [controllVisibillityName, setVisibillityName] = useState('hide')
    const [ControllVisibillityButton, SetVisibillityButton] = useState('')
    const Control = () => {
        setVisibillityName('')
        SetVisibillityButton('hide')
    }

    const { register, handleSubmit, errors } = useForm();
    function newUser(data) {
        console.log("Data submitted: ", data);
    }
    function login(data){
        console.log("Data submitted: ", [data.email, data.psw]);
    }
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        ref={register({
                            required: "Digite seu e-mail"
                        }
                        )}
                        placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        name="psw"
                        ref={register({
                            required: "Digite seu e-mail"
                        })}
                        placeholder="Password" />
                </Form.Group>
                <div className={controllVisibillityName}>
                    <div className="name">
                        <Form.Group controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                ref={register()}
                                placeholder="Nome" />
                        </Form.Group>
                        <Form.Group controlId="Sobrenome">
                            <Form.Label>Sobrenome </Form.Label>
                            <Form.Control
                                type="text"
                                name="sobrenome"
                                ref={register()}
                                placeholder="Sobrenome" />
                        </Form.Group>
                    </div>
                    <div className="moreAbout">
                        <Form.Group controlId="DataNascimento">
                            <Form.Label>Data de nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                ref={register()}
                                name="nascimento"
                            >

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="Sexo">
                            <Form.Label>Sexo</Form.Label>
                            <Form.Control
                                ref={register()}
                                as="select"
                                name="sexo"
                                placeholder="sexo"
                            >
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </Form.Control>
                        </Form.Group>
                    </div>
                    <Form.Group controlId="Nome">
                        <Form.Label>Profissão</Form.Label>
                        <Form.Control
                            type="text"
                            name="profissao"
                            ref={register()}
                            placeholder="Ex: Professor" />
                    </Form.Group>
                        <Button variant="primary" onClick={handleSubmit(newUser)}>
                            Cadatrar-se
                    </Button>
                </div>
                    <div className={ControllVisibillityButton}>
                        <div className="Buttons">
                            <Button variant="success" type="submit" onClick={handleSubmit(login)}>
                                Entrar
                    </Button>
                            <Button variant="primary" onClick={Control}>
                                Cadatrar-se
                    </Button>
                        </div>
                    </div>
            </Form>
        </div>
    )
}

export default ModalLog
