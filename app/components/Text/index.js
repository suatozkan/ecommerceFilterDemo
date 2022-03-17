import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { constants } from '../../resources';

export default class TextComponent extends Component {
  render() {
    const { style, children } = this.props;
    return (
      <Text
        {...this.props}
        style={[
          {
            fontSize: 12,
            color: constants.SECONDARY
          },
          style,
        ]}
      >
        {children}
      </Text>
    );
  }
}

TextComponent.propTypes = {
  style: PropTypes.any,
};

TextComponent.defaultProps = {
  style: {},
};
