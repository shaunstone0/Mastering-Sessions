import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { checkLoggedIn } from "./util/checkLoggedIn";

const renderApp = (preloadedState) => {
  const store = configureStore(preloadedState);
  window.state = store.getState;

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

(async () => renderApp(await checkLoggedIn()))();
