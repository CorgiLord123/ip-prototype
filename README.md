# ip-prototype

Prototype for the rogue access point webapp, completed as part of the UTS 31261 Internetworking Project. This was a group capstone project that involved both application and systems development, as well as networking and cybersecurity testing.

## Setup

The webapp consists of two parts, the React frontend and the express backend. Both components are nested in their folders, and have their own package lock file and node modules.

### Installing Node Dependencies

Hence, in order to install the necessary npm libraries for both components, the user must first run `npm install` in the project root directory.

After all packages have been installed successfully, navigate to the `/src/backend` directory, and run `npm install` again to install the packages necessary for the backend.

### Configuring Backend Address

If the prototype is to be accessed from beyond the host device (e.g. from another device in the local network), a `config.json` file must be created in the `/src` directory to specify the address of the backend for the frontend to connect to. 

The easiest way to do this is copy the provided `example-config.json` file in the `/src` directory into a new file by doing `cp example-config.json config.json`

The user can then modify `config.json` to point the IP address towards the local IP that the webapp is being hosted on. Only the IP url should be changed. The `http://` tag as well as the port number `:5000` should not be modified.

## Running

### Firewalls

The development build react frontend will listen on port `3000` by default, and the express backend will listen on port `5000` by default. The firewall must be configured to allow incoming traffic on both of these ports in order for traffic to flow unimpeded to and from the components.

### Starting the Webapp

To start the frontend, run `npm start` in the project root directory.

To start the backend, run `node index.js` in the `/src/backend` directory.

After both components have been deployed without issues, the webapp will be accessible via http://localhost:3000

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

