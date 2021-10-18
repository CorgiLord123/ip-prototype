import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
 
 function LoginForm( {Login, error} ) {

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

     return (
        <Form onSubmit={submitHandler}>
                <Card>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        {/* ERROR! */}
                        <Form.Group as={Row} className="mb-3"> 
                            <Form.Label column sm={2}>Name: </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3"> 
                            <Form.Label column sm={2}>Email: </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="email" name="email" id="email"onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3"> 
                            <Form.Label column sm={2}>Password: </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="password" name="password" id="password"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                            </Col>
                        </Form.Group>

                        <Button type="submit" value="LOGIN">Login</Button>
                    </Card.Body>
                </Card>
        </Form>
     )
 }
 
 export default LoginForm
 