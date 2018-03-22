import React, { Component } from 'react';
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

import Swiper from 'react-native-swiper';
import Fade from '../Animations/Fade';

const styles = {
	slide: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9dc6d1'
}
}

const Swipe1 = ({element1, element2, element3}) =>
<Swiper>
	<View  style={styles.slide}>{element1}</View>
	<View  style={styles.slide}>{element2}</View>
	<View  style={styles.slide}>{element3}</View>
</Swiper>


export default Swipe1
