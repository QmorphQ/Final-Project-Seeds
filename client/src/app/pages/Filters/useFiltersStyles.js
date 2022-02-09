import { makeStyles } from "@mui/styles";

const drawerWidth = 350;

const useFiltersStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },

  drawer: {
    width: drawerWidth,
  },

  drawerPaper: {
    width: drawerWidth,
    maxHeight: "100%",
    position: "relative !important",
    marginTop: "30px",
    borderRight: "none !important",
  },

  drawerStack: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "relative !important",
  },

  title: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
  },

  filterContainer: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    paddingBottom: "25px",
  },

  filterTitle: {
    paddingBottom: "10px",
  },

  originFilterContainer: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginBottom: "15px",
  },

  filterName: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    fontWeight: "bold",
  },

  priceInputsContainer: {
    display: "flex !important",
    marginBottom: "20px",
  },

  priceInputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },

  priceInputLabel: {
    position: "absolute",
    top: "5px",
    left: "25px",
  },

  priceInput: {
    minWidth: "80px",
    border: "1px",
    borderColor: "#EFEFEF",
    borderStyle: "solid",
    paddingLeft: '30px'
  },

  priceSlider: {
    width: "300px",
  },

  moreIcon: {
    cursor: "pointer",
    position: "absolute",
    top: "5px",
    right: "10px",
  },

  isClosed: {
    display: "none !important",
  },

  isOpen: {
    display: "block !important",
  },
});

export default useFiltersStyles;
