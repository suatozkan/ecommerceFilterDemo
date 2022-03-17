import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'react-native-elements';
import { constants } from './resources';

import Home from './screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EmptyScreen = () => {
  return null;
};

const HomeMenu = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

const MainScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: constants.SECONDARY,
        inactiveTintColor: constants.LIGHTGRAY,
        showLabel: false,
      }}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name='HomeMenu'
        component={HomeMenu}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'menu' : 'menu-outline'} type='ionicon' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'wallet' : 'wallet-outline'}
              type='ionicon'
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'search' : 'search-outline'}
              type='ionicon'
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Message'
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
              type='ionicon'
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'person' : 'person-outline'}
              type='ionicon'
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainApp = (props) => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Main' component={MainScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const mapStateToProps = (store) => ({
  products: store.userState.products,
});

const mapDispatchProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(MainApp);
