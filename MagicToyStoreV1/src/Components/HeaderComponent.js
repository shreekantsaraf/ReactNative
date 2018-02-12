import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  Animated,
  Easing
} from 'react-native';
import {Header, Body, Left, Right} from 'native-base';

export class HeaderComponent extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.spin()
  }
  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['360deg', '0deg']
    });
    return (
        <Header style={{backgroundColor:'orange'}}>
            <Left>
              <Animated.Image
                style={{
                  width:50, height:50,
                  transform: [{rotateX: spin}] }}
                  source={require('../../images/ducky2.jpg')}
                  // {{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
              />
            </Left>
            <Text>
                Magic Toy Store
            </Text>
            <Right>
                {/* <Button  title="BTN"></Button> */}
            </Right>
        </Header>
    );
  } 
}

export default HeaderComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    logo: {
        width:50,
        height:50,
        backgroundColor:'orange'
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
  