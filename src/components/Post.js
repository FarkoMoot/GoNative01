import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Post = props => (
  <View style={ styles.div1}>
    <Text style={styles.titletxt}>{props.title}</Text>
    <Text style={styles.nametxt}>{props.auth}</Text>
    <View style={styles.line} />
    <Text style={styles.bodytxt}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.</Text>
  </View>
);

Post.defaultProps = {
  title: "Title",
  auth: "Auth",
};

const styles = StyleSheet.create({
  div1: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  titletxt: {
    fontSize: 16,
    color: "#333"
  },
  nametxt: {
    fontSize: 14,
    color: "#999"
  },
  bodytxt: {
    fontSize: 14,
    color: "#666"
  },
  line: {
    marginVertical: 2,
    height: 1,
    backgroundColor: "#eee"
  }
})


export default Post;
