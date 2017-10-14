import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { Map } from "immutable";
import configureStore from "./redux/store";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import {Theme} from "./utils";
import {setApiKey,setAuthorizationToken} from "./api";
setApiKey("03UwJxk/bQx9hCXHVXX4VXdw/Om7hzMcdI5/ba2C1H4+");
const token = localStorage.getItem("token");
if (token) {
  setAuthorizationToken(token);
}
const initialState = Map();
const store = configureStore(initialState);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
