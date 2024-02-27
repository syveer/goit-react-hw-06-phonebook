import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './Store/Store';
import ContactBook from './ContactBook/ContactBook';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContactBook />
      </PersistGate>
    </Provider>
  );
}

export default App;
