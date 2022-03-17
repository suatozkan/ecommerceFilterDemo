import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'reduxstore/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from 'components';

import MainScreen from './app/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <MainScreen />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
