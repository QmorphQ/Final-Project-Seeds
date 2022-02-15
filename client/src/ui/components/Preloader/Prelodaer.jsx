import PropTypes from 'prop-types';
import { Container, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import PreloaderIcon from "./PreloaderIcon/PreloaderIcon.jsx";

export default function Preloader({ spaceBetween, widthInApp, heightInApp }) {
  const pressets = {
    style: {
      Container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        zIndex: "1",
        transform: "translate(-50%, -50%)",
      },
      Title: {
        color: "#359740",
        fontSize: "1em",
        marginBottom: spaceBetween,
      },
    },
    text: {
      Title: "LOADING",
    },
  };
  return (
    <Container sx={pressets.style.Container}>
      <Typography sx={pressets.style.Title} variant="h2">
        <PreloaderIcon iconWidth={widthInApp} iconHeight={heightInApp} />
      </Typography>
      <Typography sx={{ width: "50%" }}>
        <LinearProgress color="success" />
      </Typography>
    </Container>
  );
}
Preloader.defaultProps = {
    spaceBetween: "3em",
    iconWidth: "200",
    heightInApp: "50",
}

Preloader.propTypes = {
    spaceBetween: PropTypes.string,
    widthInApp: PropTypes.string,
    heightInApp: PropTypes.string,
}