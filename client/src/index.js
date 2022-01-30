import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store";
import CustomThemeProvider from "./ui/hoc/CustomThemeProvider.jsx";

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <App/>
    </CustomThemeProvider>
  </Provider>,
  document.getElementById("root")
);
