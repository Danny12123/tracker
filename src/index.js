import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { Provider } from "react-redux";
import store, { persistor } from "./redux/Stor";
import { PersistGate } from "redux-persist/integration/React";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <Provider store={ store }>
        <PersistGate persistor={ persistor }>
          <App />
        </PersistGate>
      </Provider>
    </GlobalProvider>
  </React.StrictMode>
);


