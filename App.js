import React from 'react';

import Home from './Components/src/Home';
import Chat from './Components/src/Chat';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


  const RootStack = createStackNavigator({
    Home: {
      screen: Home
     },
    Chat: {
      screen: Chat
    },
  initialRouteName: Home,
});

const App = createAppContainer(RootStack);

export default App;
