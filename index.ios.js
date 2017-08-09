/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';
import {Client, Configuration} from 'bugsnag-react-native';

const config = new Configuration('MY_API_KEY');
config.appVersion = '1.0.0-b20';

const bugsnag = new Client(config);

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => {
            throw "Error2"
          }}>
            <Text>throw "Error2"</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              x;
          }}>
            <Text>x;</Text>
          </TouchableOpacity>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
