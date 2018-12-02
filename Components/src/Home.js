import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ImageBackground } from 'react-native';
//import { navigate } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import BackgroundImage from './BackgroundImage';

class Home extends React.Component {
  state = {
    name:'',
  };
  render() {
    return (
  //    <View style={styles.container}>
    <ImageBackground style={styles.container} source={require('./backgroundImage.jpg')}>
      <Image style={styles.logo} source={require('./logo.png')}/>
        <Text style={styles.h1}>Lets start with your name:</Text>
        <TextInput
          placeholder="Type Your Name..."
          style={styles.nameInput}
          onChangeText={(text)=>{
            this.setState({
            name: text,
          });
        }}
         value={this.state.name}
        />
        <TouchableOpacity
         style={styles.buttonStyle}
         onPress={()=>{
           console.log(this.state.name);
           Actions.chat({
             name: this.state.name
           });
         }}>
         <Text style={{fontSize:30}}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
//      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    color: 'white',


  },
  background: {
    width: null,
    height: null,

  },
  logo: {

    alignItems:'center',
    //backgroundColor: '#00bfff'
  },
  buttonStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
   marginLeft:30,
   marginRight:30,
   backgroundColor:'#e6ffff',
   borderRadius:6,
   borderWidth: 1,
   borderColor: '#fff',
   width: 100,
   height: 50,
  },
  NameInput: {
    height: 50,
    margin: 15,
    borderWidth: 1,
    borderColor: '#7a42f4',
    backgroundColor: 'white',

  },
  container: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'column',
    alignItems: 'center',
    resizeMode: 'cover',
    height: null,
    width: null,

  },
});

export default Home;
