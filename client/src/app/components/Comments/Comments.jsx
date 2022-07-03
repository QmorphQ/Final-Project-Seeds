import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import Comment from "./Comment.jsx";
import examples from "./examples";
import styles from "./CommentsStyles";
import "./SwiperCSS.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function Comments({ dataToRender }) {
  return (
    <Box sx={styles.comments} component={"section"} className="comments">
      <h2  className="comments-title">What people say about our products</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{
          clickable: true,
        }}
        loop
        speed={500}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          waitForTransition: true,
          disableOnInteraction: false,
        }}
        
        className="swiper-container"
        
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          720: {
            width: 600,
            slidesPerView: 2,
            spaceBetween: 30
          },
          980:{
            width: 800,
            slidesPerView: 3,
            spaceBetween: 10
          },
          1200: {
            width: 1000,
            slidesPerView: 3,
            spaceBetween: 50
          },
          1600: {
            width: 1300,
            slidesPerView: 4,
            spaceBetween: 50
          }
          
        }}
      >
        {dataToRender.map((el, i) => (
          <SwiperSlide key={i}>{Comment(el)}</SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

Comments.defaultProps = {
  dataToRender: examples,
};

Comments.propTypes = {
  dataToRender: PropTypes.arrayOf(PropTypes.object),
};
