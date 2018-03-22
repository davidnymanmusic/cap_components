import React, { Component } from 'react';

import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

class ButtonBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
    };
		this.buttonPress = this.buttonPress.bind(this)
  }

  buttonPress() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const text = this.state.liked ? this.props.option1 : this.props.option2;


    return (
      <View>
      <TouchableOpacity onPress={this.buttonPress}><Text style={this.props.style}>{text}</Text></TouchableOpacity>
		</View>
  );
  }
}

export default ButtonBox
