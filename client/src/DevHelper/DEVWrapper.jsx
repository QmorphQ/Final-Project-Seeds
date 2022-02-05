import PropTypes from "prop-types";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import DEVController from "./DEVController/DEVController.jsx";
// ==================================================================
// ---------------------------------------------- TEST -----------------------------------------------
import { productsSelector } from "../store/selectors/selectors";

// ===================================================================

// ===================================================================
// -------------------------------------------------------------------
// ++++++
// +++
export default function DEVWrapper({
  TestComponent,
  DevComponent,
  setOfHandlers,
}) {
  // -------------------------------------------------------------------
  const [appMode, setAppMode] = useState("dev");
  const [activeController, setActiveController] = useState(false);
  const productList = useSelector(productsSelector);

  const initialHandlers = [
    {
      text: "productList",
      handler: () => console.log("productList: ", productList),
    },
  ];
  // ++++++
  const DEVcnlSttyle =
    "background-color: blue; color: orange; font-weight: bold;";
  // ++++++
  const TESTcnlStyle =
    "background-color: red; color: yellow; font-weight: bold;";
  // ++++++
  const keyPressHandler = (event) => {
    if (event.code === "KeyZ" && event.code === 'ShiftLeft') {
      setAppMode((prevMode) => (prevMode === "dev" ? "test" : "dev"));
    } else if (event.code === "KeyE" && event.code === 'ShiftLeft') {
      setActiveController((mode) => !mode);
    }
  };
  // -------------------------------------------------------------------
  useEffect(() => {
    document.addEventListener("keypress", keyPressHandler);
    console.log(
      `%c${appMode.toUpperCase()} MODE`,
      `${appMode === "dev" ? DEVcnlSttyle : TESTcnlStyle}`
    );
  }, [appMode]);
  // -------------------------------------------------------------------
  useEffect(
    () => () => document.removeEventListener("keypress", keyPressHandler),
    [appMode]
  );
  // -------------------------------------------------------------------
  return (
    <>
      {activeController ? (
        <DEVController listOfHandlers={initialHandlers || setOfHandlers} />
      ) : null}
      {appMode === "dev" ? DevComponent : TestComponent}
    </>
  );
}

// ===================================================================
DEVWrapper.defaultProps = {
  setOfHandlers: [
    {
      text: "text",
      handler: () => console.log("test"),
    },
  ],
};

DEVWrapper.propTypes = {
  TestComponent: PropTypes.element,
  DevComponent: PropTypes.element,
  setOfHandlers: PropTypes.arrayOf(
    PropTypes.shape({
      handler: PropTypes.func,
      text: PropTypes.string,
    })
  ),
};
