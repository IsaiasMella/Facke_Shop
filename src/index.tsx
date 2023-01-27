import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeConfig from './Config/theme.config';
import { NotificationProvider } from './Context/NotificationProvidert';
import { ModalProvider } from './Context/ModalProvider';
import { Provider } from 'react-redux'
import { store } from './Redux/Store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <ModalProvider>
          <ThemeConfig>
            <App />
          </ThemeConfig>
        </ModalProvider>
      </NotificationProvider>
    </Provider>
  </React.StrictMode >
);