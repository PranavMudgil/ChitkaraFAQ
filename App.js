import React from 'react';
import Home from './Components/src/Home';
import Chat from './Components/src/Chat';
import {Scene, Router} from 'react-native-router-flux';

export default class App extends React.Component {
  render(){
   return(
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "chat" component = {Chat} title = "Chat" />
      </Scene>
   </Router>
 );
 }
}
