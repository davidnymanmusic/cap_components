import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Slider,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 50,
    fontFamily: 'Avenir-Book',
    textAlign: 'center'
  }
});

const Fade = ({text, icon}) =>
<Animatable.View animation="fadeIn" duration={3000} iterationCount={1}>
  <Text style={styles.text}>{text}</Text>
  <Animatable.Text animation="fadeIn" duration={3000}
	iterationCount={'infinite'} easing={'ease-out'}>
	{icon}
</Animatable.Text>
</Animatable.View>

export default Fade
