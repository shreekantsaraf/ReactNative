/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
Button,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import {HeaderComponent} from './src/Components/HeaderComponent';
import {Container, Header, Footer, Body, Left, Right} from 'native-base';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



export default class App extends Component {
  constructor () {
    super()
    this.spinValue = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.springValue = new Animated.Value(0.3);
    this.state = {
      directionOfRotation :0
    }
  }
  componentDidMount () {
    this.spin();
    this.animate();

  }
  decideDirection()
  {
    var nextState=0;
    switch (this.state.directionOfRotation)
    {
      case 0: {nextState=1;break;}
      case 1: {nextState=2;break;}
      case 2: {nextState=0;break;}
      default: {nextState=0;break;}
    }
    this.setState({directionOfRotation :nextState});
  }
  animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
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
  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1
      }
    ).start()
  }
  getTransform()
  {
    var rotateTr = [{rotateX: this.getRotate()}];
    switch(this.state.directionOfRotation)
    {
      case 0: {rotateTr = [{rotateX: this.getRotate()}];;break;}
      case 1: {rotateTr = [{rotateY: this.getRotate()}];;break;}
      case 2: {rotateTr = [{rotateZ: this.getRotate()}];;break;}
      default: {rotateTr = [{rotateX: this.getRotate()}];;break;}
    }
    return rotateTr;
  }
  getRotate(){
    return this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
          });
  }
  
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '720deg']
    });
    return (
      <Container>
        <HeaderComponent />
        
        <Header>
            <Body>
              <Animated.Image
                style={{ width:100, height:100, transform: this.getTransform()}}
                  source={require('./images/ducky.jpg')}
              />
            </Body>
            <Right>
              <Button title="chage dir" style={styles.welcome} onPress={this.decideDirection.bind(this)}></Button>
            </Right>
            </Header>
 
        <View style={styles.container}>
          <Animated.Image
            style={{ width:100, height:100,
              transform: [{rotateZ: this.getRotate() }]}}
              source={require('./images/ducky.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Animated.Image
            style={{ width:100, height:100,
              transform: [{rotateX: this.getRotate()}]}}
              source={require('./images/ducky.jpg')}
          />
        </View>
        <View>
          <Button title="chage dir" style={styles.welcome} onPress={this.decideDirection.bind(this)}></Button>
        </View>
        <Footer style={{backgroundColor:'violet'}} >
        <Text style={styles.footer}> &copy; Magic Toy Store 2018</Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    display: 'flex'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sizeImage: {
    width:100,
    height:100
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  footer: {
    fontSize:10,
    color: 'white',
    marginTop:'auto',
    marginLeft:5,
    marginRight:'auto',
    marginBottom:5
  },
});
