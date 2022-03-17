
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import Text from '../Text';
import { constants } from '../../resources';

const { width } = Dimensions.get('window');

export default class HeaderComponent extends React.Component {
  render() {
    const {
      borderColor,
      backgroundColor,
      rightButtonIcon,
      placement,
      leftButtonIcon,
      title,
      rightButtonPress,
      leftButtonPress,
      color,
      leftIconColor,
    } = this.props;

    return (
      <Header
        statusBarProps={{ barStyle: 'dark-content', backgroundColor }}
        leftComponent={
          leftButtonPress ? (
            <TouchableOpacity style={styles.leftIcon} onPress={() => leftButtonPress()}>
              <Icon name={leftButtonIcon} color={leftIconColor} type='material-community' />
            </TouchableOpacity>
          ) : null
        }
        centerComponent={
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              color: constants.SECONDARY,
              paddingBottom: 10,
            }}
          >
            {title}
          </Text>
        }
        rightComponent={
          rightButtonPress ? (
            <TouchableOpacity style={styles.rightIcon} onPress={() => rightButtonPress()}>
              <Icon name={rightButtonIcon} color={color} type='material-community' />
            </TouchableOpacity>
          ) : null
        }
        placement={placement}
        containerStyle={{
          borderBottomWidth: !!!borderColor ? 0 : 1,
          backgroundColor,
          borderColor,
        }}
      />
    );
  }
}

HeaderComponent.propTypes = {
  leftButtonIcon: PropTypes.string,
  rightButtonIcon: PropTypes.string,
  title: PropTypes.string,
  leftButtonPress: PropTypes.func,
  rightButtonPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  color: PropTypes.string,
  leftIconColor: PropTypes.string,
};

HeaderComponent.defaultProps = {
  leftButtonIcon: 'star',
  rightButtonIcon: 'star',
  title: '',
  leftButtonPress: null,
  rightButtonPress: null,
  backgroundColor: constants.WHITE,
  borderColor: '',
  placement: 'center',
  color: constants.SECONDARY,
  leftIconColor: constants.SECONDARY,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: constants.WHITE,
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  rightIcon: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
