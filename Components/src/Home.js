import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

class Home extends React.Component {
  state = {
    name:'',
  };

  onPress=()=>{

  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Enter Your Name:</Text>
        <TextInput
          placeholder="John Doe"
          style={styles.nameInput}
          onChangeText={(text)=>{
            this.setState({
            name: text,
          });
        }}
         value={this.state.name}
        />
        <TouchableOpacity onPress={navigate('Chat',{name: this.state.name})}
         text="-Next->"></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    margin: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#1f1f7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
