import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import store, { persistor } from "./store/store";
import CustomThemeProvider from "./ui/hoc/CustomThemeProvider.jsx";

// ==================================================
import DEVWrapper from "./DevHelper/DEVWrapper.jsx";
import TestApp from "./TestApp.jsx";
// ==================================================

ReactDOM.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <PersistGate loading={null} persistor={persistor}>
        <DEVWrapper TestComponent={<TestApp />} DevComponent={<App />} />
      </PersistGate>
    </CustomThemeProvider>
  </Provider>,
  document.getElementById("root")
);
