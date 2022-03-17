/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Text from '../Text';

export default class Loading extends React.Component {
  render() {
    const { text, textStyle, loadingStyle, indicatorColor } = this.props;

    return (
      <View style={loadingStyle}>
        <ActivityIndicator size='small' color={indicatorColor} />
        {text !== '' && <Text style={textStyle}>{text}</Text>}
      </View>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  textStyle: PropTypes.object,
  loadingStyle: PropTypes.object,
  indicatorColor: PropTypes.string,
};

Loading.defaultProps = {
  text: '',
  textStyle: {},
  loadingStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  indicatorColor: '#000',
};
