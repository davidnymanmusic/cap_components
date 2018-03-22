import React from 'react';
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
import Icon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


const styles = {
	icon: {
		flex: 1,
		paddingLeft: 15
	}
}

const Arrow = () =>
<Animatable.Text style={styles.icon} animation={'fadeInLeft'} iterationCount={'infinite'} duration={1600} easing={'ease-out-sine'}>
	<Icon name="chevrons-right" size={75} color="rgba(255, 255, 255, 0.63)"/></Animatable.Text>


	export default Arrow
