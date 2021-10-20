import React, { useState } from 'react';
import { Col, Row, Card, Form, Button } from 'react-bootstrap';
import DeviceDetector from "device-detector-js";
import axios from 'axios';
import config from '../config.json';
import logo from './Icons/utspng.png';
import { useHistory } from "react-router-dom";

const deviceInfo = () => {
    const deviceDetector = new DeviceDetector();
    return deviceDetector.parse(navigator.appVersion);
};
 
function LoginForm() {
    let history = useHistory();

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        history.push('LandingPage');

        const metadata = deviceInfo();
        
        console.log(metadata);
        console.log(details);

        axios.post(config.adr + '/data', details)
            .then(response => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <Form onSubmit={submitHandler}>
                <Card>
                    <Card.Header as="h1"><img src={logo} alt="UTS Logo" style={{  
                        'width': "30%",
                        'height': "30%"
                        }}/><br />Login</Card.Header>
                    <Card.Body>
                        <Form.Group as={Row} className="mb-3"> 
                            <Form.Label column sm={3}>Name: </Form.Label>
                            <Col sm={9}>
                                <Form.Control required type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3"> 
                            <Form.Label column sm={3}>Email: </Form.Label>
                            <Col sm={9}>
                                <Form.Control required type="email" name="email" id="email"onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3"> 
                            <Form.Label column sm={3}>Password: </Form.Label>
                            <Col sm={9}>
                                <Form.Control required  type="password" name="password" id="password"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                            </Col>
                        </Form.Group>

                        <Button type="submit" value="LOGIN">Login</Button>
                    </Card.Body>
                </Card>
        </Form>
    )
 }
 
 export default LoginForm
 
