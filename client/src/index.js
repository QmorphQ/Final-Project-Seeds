import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store";
import TestStore from "./store/TestStore.jsx";
import CustomThemeProvider from "./ui/hoc/CustomThemeProvider.jsx";

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <TestStore/>
    </CustomThemeProvider>
  </Provider>,
  document.getElementById("root")
);
