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

export default function ScrollToTopBtn({ offsetLimit, delay }) {
  // +++++++++++++++++
  // Pressets:
 
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
    } 
  }

  function scrollListener() {
    if (window.scrollY > offsetLimit) {
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
      }, delay);
    } else {
      clearTimeout(timerID);
    }
  }, [start]);
  // --------------------------------------------------
  return <>{open && <Btn handler={moveTop} />}</>;
}
// ==================================================
ScrollToTopBtn.defaultProps = {
  offsetLimit: 400,
  delay: 2000
}

Btn.propTypes = {
  handler: PropTypes.func
  
};

ScrollToTopBtn.propTypes = {
  offsetLimit: PropTypes.number,
  delay: PropTypes.number
}