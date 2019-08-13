import { Count } from '@gyza/common';
import * as serviceWorker from './serviceWorker';
// import './icons';
import { AppRegistry } from 'react-native';
// register the app
AppRegistry.registerComponent('App', () => Count);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
