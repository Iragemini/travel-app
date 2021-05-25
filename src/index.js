import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {LanguageProvider} from './context';
import store from './redux/store';
import {HashRouter} from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <LanguageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root')
);
