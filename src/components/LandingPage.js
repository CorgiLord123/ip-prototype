import React from 'react';
import { Col, Row, Card, } from 'react-bootstrap';
import DeviceDetector from "device-detector-js";
import logo from './Icons/utspng.png';

const deviceInfo = () => {
    const deviceDetector = new DeviceDetector();
    return deviceDetector.parse(navigator.appVersion);
};
 
function LandingPage( ) {

    return (
        <Card>
            <Card.Header as="h1"><img src={logo} alt="UTS" style={{  
                'width': "30%",
                'height': "30%"
                }}/><br />Welcome to UTS Project Wi-Fi!</Card.Header>
            <Card.Body style={{'text-align': "left"}}>
                This access point was created as part of Internetworking Project (31261 - SPR) which will capture device information and data you just entered into the login page. <br /><br />
                I see that you are a <b><em style={{'color': "#4bc5fa"}}>{deviceInfo().os.name} {deviceInfo().os.version}</em></b> user viewing this from a <b><em style={{'color': "#4bc5fa"}}>{deviceInfo().device.type}</em></b>, but don't worry, collected data will not be distributed or used in anyway!<br /><br />

                <h3>The authours:</h3>
                <ul>
                    <li>Kenny</li>
                    <li>Ted</li>
                    <li>Leo</li>
                    <li>Wermen</li>
                    <li>Damian</li>
                    <li>Stanley</li>
                </ul>
            </Card.Body>
        </Card>
    )
 }
 
 export default LandingPage
 