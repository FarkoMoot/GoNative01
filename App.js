/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import './src/config/ReactotronConfig';
import './src/config/ReactDevTools';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Post from './src/components/Post'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:40, alignItems:'center',justifyContent: 'center', elevation:1 }}>
          <Text style={{ fontWeight:'bold', fontSize: 16 }} >GoNative App</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <Post title="GoNative01" auth="Gustavo Patrick" />
          <Post title="#Desafio01" auth="Gustavo Patrick" />
          <Post />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scroll: {
    backgroundColor: '#EE7777',
    flex: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
