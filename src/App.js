import logo from './logo.svg';
import DeviceDetector from "device-detector-js";
import './App.css';

const deviceInfo = () => {
    const deviceDetector = new DeviceDetector();
    return deviceDetector.parse(navigator.appVersion);
  };

function App() {
    console.log(deviceInfo());
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
