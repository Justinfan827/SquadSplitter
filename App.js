/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, View, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Tesseract from 'tesseract.js'

type Props = {};
export default class App extends Component<Props> {
  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker((response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          pickedImage: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={this.state.pickedImage}/>
        </View>
        <View style={styles.pickButton}>
          <Button title="Choose Image" onPress={this.pickImageHandler}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1
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
