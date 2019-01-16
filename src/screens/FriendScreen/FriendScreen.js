/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, TextInput, View, Button, FlatList, List, ListItem} from 'react-native';
import ImagePicker from 'react-native-image-picker';

type Props = {};
export default class FriendScreen extends Component<Props> {
  state = {
    friends: ["Justin", "Austin", "Mohan", "Erik"],
    text: "Useless Placeholder"
  }

  onChangeTextHandler = (text) => {
    this.setState({text: text})
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <FlatList
            data={this.state.friends}
            renderItem={({ item }) => <Text>{item}</Text>}
          />
        </View>
        <View style={styles.container}>
          <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this.onChangeTextHandler}
              value={this.state.text}
            />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    paddingTop: 40
  }, 
  imageContainer: {
    width: "50%",
    height: "30%",
    borderColor: 'red', 
    borderWidth: 1
  }, 
  pickButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red', 
    borderWidth: 1
  }



});
