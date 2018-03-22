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

import Fade from '../Animations/Fade'
import Welcome from '../Animations/Welcome'
import Arrow from '../Animations/AnimateArrow'
import Swipe1 from '../Swipers/Swipe1'

<Swipe1 element1={
		<Fade text = {'hello'} icon={<Arrow/>} />}
			element2={<Fade text = {'world'}
				icon={<Arrow/>}/>}
			 element3={<Fade text = {
			'thanks'
		} icon={<Arrow/>} />}/>
