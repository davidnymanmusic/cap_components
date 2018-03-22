import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import Fade from './Animations/Fade'
import Welcome from './Animations/Welcome'
import Arrow from './Animations/AnimateArrow'
import Swipe1 from './Swipers/Swipe1'
import TabNavigator from './Navigation/NavBar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: false,
			home: false
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({splash: true})
    }, 4000)
  }



  render() {
    return (
		 !this.state.splash
      ? (<Welcome text={'Serenity Now'}/>)
      :
			(
					<TabNavigator/>
		)
		);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dc6d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerWelcome: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#9dc6d1',
    paddingTop: 18,
    paddingBottom: 40
  }
});
