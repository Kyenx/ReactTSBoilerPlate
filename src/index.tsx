import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import configStore from "./app/app_redux/store";

import App from './app/App';

const store = configStore();

const AppComp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render( <AppComp />, document.getElementById("root") );