import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { directLine } from 'botframework-directlinejs';
import { View, StyleSheet } from 'react-native';


const directLine = new DirectLine({
  secret: "O3ydUie9CWk.cwA.CFw.EtV3Ct8C1yE2mE4-XHLW6-32l19qSZKdx4ncNeFeGQQ"
});

const botMessageToGiftedMessage = botMessage => ({
  ...botMessage,
  _id: botMessage.id,
  createdAt: botMessage.timestamp,
  user: {
    _id: 2,
    name: "React Native",
    avatar:
      "https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png"
  }
});

function giftedMessageToBotMessage(message) {
  return {
    from: { id: 1, name: "John Doe" },
    type: "message",
    text: message.text
  };
}


class Chat extends React.Component {
state = {
    messages: []
};
 constructor(props) {
   super(props);
   directLine.activity$.subscribe(botMessage => {
      const newMessage = botMessageToGiftedMessage(botMessage);
      this.setState({ messages: [newMessage, ...this.state.messages] });
    });

 }
 onSend = messages => {
     this.setState({ messages: [...messages, ...this.state.messages] });
     messages.forEach(message => {
       directLine
         .postActivity(giftedMessageToBotMessage(message))
         .subscribe(() => console.log("success"), () => console.log("failed"));
     });
   };

   render(){
     return(
       <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend = {(message) => {
              this.onSend(message);
          }}/>
       </View>

     );
   }
}
var styles=StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default Chat;
