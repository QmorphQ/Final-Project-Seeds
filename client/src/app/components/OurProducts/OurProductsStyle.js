import { makeStyles } from "@mui/styles";

/*
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px
*/

const useStyles = makeStyles((theme) => ({
  ourProducts: {
    paddingTop: "60px",
    paddingBottom: "60px",
    paddingLeft: "0",
    paddingRight: "0",
    width: "auto",
  },
  ourProductHeading: {
    marginBottom: "40px !important",
    fontWeight: "bold !important",
    fontSize: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  tabsContainer: {
   
  },
  tab: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "center",
    "&:not(:last-child)": {
      marginRight: "12px",
    },

    [theme.breakpoints.down("md")]: {
      marginTop: "0",
      marginBottom: "0",
      paddingTop: "0",
      paddingBottom: "0",
    },

    "& > svg": {
      marginRight: "20px",
      color: theme.palette.primary.main,
    },
  },

  navigation: {
    marginBottom: "25px",
  },
}));

export default useStyles;
