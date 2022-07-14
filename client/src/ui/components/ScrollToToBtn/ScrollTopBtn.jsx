
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ScrollBtn from "./Btn/ScrollBtn.jsx";

import position from "./ScrollTopBtnPosition";



export default function ScrollTopBtn({ offsetLimit }) {
  
  const [open, setOpen] = useState(null);
  const [start, setStart] = useState(false);
  
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
    if (window.scrollY > offsetLimit) {
      setStart(true);
    } else {
      setStart(false);
      setOpen(false);
    }
  }
  
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
  
  return <>{open && <ScrollBtn sx={position} handler={moveTop} />}</>;
}

ScrollTopBtn.defaultProps = {
  offsetLimit: 400,
};

ScrollTopBtn.propTypes = {
  offsetLimit: PropTypes.number,
};