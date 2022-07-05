// Import:
// Libraries:
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// React Components:
import { IconButton } from "@mui/material";
import ScrollTopBtnIcon from "./svg/ScrollTopBtnIcon.jsx";
// Styles:
import styles from "./ScrollToTopBtnStyles";
// ==================================================
// --------------------------------------------------
// ++++++
// ==================================================
const Btn = ({ handler }) => (
  <IconButton
    className="scroll-top-btn"
    sx={{ ...styles.scrollTopBtn }}
    onClick={handler}
    aria-label="scroll-top"
    disableRipple={true}
  >
    {<ScrollTopBtnIcon />}
  </IconButton>
);

export default function ScrollToTopBtn() {
  // +++++++++++++++++
  // Pressets:
  const offsetY = 400;
  // +++++++++++++++++

  const [open, setOpen] = useState(null);
  const [start, setStart] = useState(false);
  // --------------------------------------------------
  function moveTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function clickListener(e) {
    e.stopPropagation();
    const btn = document.querySelector(".scroll-btn-circle");
    const { target } = e;
    if (target !== btn) {
      setStart(false);
      setOpen(false);
    } else {
      setStart(true);
    }
  }

  function scrollListener() {
    if (window.scrollY > offsetY) {
      setStart(true);
    } else {
      setStart(false);
      setOpen(false);
    }
  }
  // --------------------------------------------------
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    window.addEventListener("click", clickListener);
    return () => window.removeEventListener("click", clickListener);
  }, []);

  useEffect(() => {
    let timerID;
    if (start) {
      timerID = setTimeout(() => {
        setOpen(true);
      }, 2000);
    } else {
      clearTimeout(timerID);
    }
  }, [start]);
  // --------------------------------------------------
  return <>{open && <Btn handler={moveTop} />}</>;
}
// ==================================================
Btn.propTypes = {
  handler: PropTypes.func,
};
