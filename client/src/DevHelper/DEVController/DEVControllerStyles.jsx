export const DEVControllerStyles = {
  container: {
    overflow: "hidden",
    width: "25vw",
    height: "10vh",
    backgroundColor: "gray",
    border: '2px solid black',
    borderRadius: '10px',
    position: "fixed",
    left: "10%",
    top: "10%",
    zIndex: "10",
    opacity: "0.5",
    transition: 'height 0.5s, opacity 0.5s',
    "&:hover": {
      height: "30vh",
      opacity: "1",
    },
  },
};
