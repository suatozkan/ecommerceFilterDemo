import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';
import { constants } from "../../resources";

const { width } = Dimensions.get('screen');

export default class Button extends PureComponent {
  render() {
    const { buttonStyle, textStyle, text, onPress, disabled } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8} disabled={disabled} onPress={() => onPress()}>
        <View style={[styles.button, buttonStyle, disabled && { backgroundColor: 'gray' }]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  buttonStyle: {},
  textStyle: {},
  onPress: () => null,
  text: 'Örnek Buton',
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: constants.YELLOW,
    borderRadius: 2,
    padding: 10,
    width: width - 40,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});
