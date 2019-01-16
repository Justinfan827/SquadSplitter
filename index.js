/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FriendScreen from './src/screens/FriendScreen/FriendScreen';

AppRegistry.registerComponent(appName, () => FriendScreen);
