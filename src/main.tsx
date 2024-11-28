import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from '_app/redux/store';

declare global {
  interface Window {
    __WHEEL_SPIN_AUDIO__: HTMLAudioElement;
    __BACKGROUND_AUDIO__: HTMLAudioElement;
    __HAS_BEEN_INITIAL_INTERACTION__: boolean;
    webkitAudioContext: typeof AudioContext;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
