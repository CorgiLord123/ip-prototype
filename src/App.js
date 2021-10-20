import DeviceDetector from "device-detector-js";
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import { Container } from 'react-bootstrap'
import './App.css';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';

const deviceInfo = () => {
    const deviceDetector = new DeviceDetector();
    return deviceDetector.parse(navigator.appVersion);
  };

function App() {
    console.log(deviceInfo());
    return (
        <div className="App">
            <Router>
                <main>
                    <Container>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/LandingPage" component={LandingPage} />
                    </Container>
                </main>
            </Router>
        </div>
    );
}
/*
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Here is your <code>Device Information</code> Below:
            </p>
            <ul>
                <li>OS Name : {deviceInfo().os.name}</li>
                <li>OS Name : {deviceInfo().os.version}</li>
            </ul>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        <main>

        </main>
*/
export default App;
