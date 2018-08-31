import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Slider from "react-native-slider";
import styled from "styled-components"

import Constants from '../constants/Layout'

const num2Time = (num) => {
  const minutes = Math.floor(num / 60);
  const seconds = num % 60;
  const format = (value) => {
    if (value < 10){
      return `0${value}`;
    }
    return value;
  } 
  return `${format(minutes)}:${format(seconds)}`;   
}

const StyledSlider = styled(Slider)`
  ${({hidden}) => hidden ? 'opacity: 0;' : ''}
`;

export default class StandupScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    value: 120,
    initialValue: 120,
    participant: 0,
    interval: null
  }

  onTap() {
    const {participant, initialValue, interval} = this.state;
    clearInterval(interval);
    this.setState({participant: participant + 1, value: initialValue})
    
    const _interval = setInterval(() => {
      const {value} = this.state;
      if (value <= 0) {
        clearInterval(interval);
      }
      this.setState({value: value - 1})
    }, 1000);
    this.setState({interval: _interval})
  }

  render() {
    const {participant, value} = this.state;
    return (
      <TouchableHighlight
        onPress={this.onTap.bind(this)}
        underlayColor="lightgreen"
        style={styles.container}
      >
        <View style={styles.container}>

          <View style={styles.totalTimeContainer}>
            <Text style={styles.totalTime}>Total Time:</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {num2Time(value)}
            </Text>
            <View style={styles.rangeContainer}>
              <StyledSlider
                hidden={!!participant}
                value={this.state.value}
                onValueChange={value => this.setState({ value, initialValue: value })}
                minimumValue={0}
                maximumValue={300}
                step={10}
                style={styles.range}
              />
            </View>
          </View>

          <View style={styles.tapToStartContainer}>
            <Text style={styles.tapToStart}>{!participant ? 'Tap to start' : `Particiapant ${participant}`}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalTimeContainer: {
    paddingTop: 30,
  },
  totalTime: {},
  timeContainer: {
    alignItems: 'center'
  },
  time: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  rangeContainer: {
    width: Constants.window.width,
    padding: 20
  },
  range: {},
  tapToStartContainer: {
    padding: 30,
  },
  tapToStart: {}
});
