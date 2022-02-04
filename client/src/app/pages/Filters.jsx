import PropTypes from "prop-types";
import { Box, Container, Drawer, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/ Footer/Footer.jsx";
import { downloadRequestStates } from "../constants";
import ProductsListFilters from "../components/ProductsList/ProductsListFilters.jsx";

const drawerWidth = 350;

const useStyles = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    position: "relative",
    marginTop: "30px",
    borderRight: "none",
  },
  title: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
  },
  filterName: {
    borderBottom: "1px",
    borderBottomColor: "#EFEFEF",
    borderBottomStyle: "solid",
    fontWeight: "bold",
  },
});

const Filters = ({ loading, productList }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={0} md={4}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
            anchor="left"
          >
            <Container>
              <Stack spacing={8}>
                <Typography variant="h5" className={classes.title}>
                  FILTERS
                </Typography>
                <Typography variant="p" className={classes.filterName}>
                  By categories
                </Typography>
                <Typography variant="p" className={classes.filterName}>
                  Sorted by
                </Typography>
                <Typography variant="p" className={classes.filterName}>
                  Price
                </Typography>
              </Stack>
            </Container>

            {/* links/list section */}
          </Drawer>
        </Grid>
        <Grid item xs={12} md={8}>
          <ProductsListFilters loading={loading} productList={productList} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

Filters.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      currentPrice: PropTypes.number,
      categories: PropTypes.string,
      description: PropTypes.string,
      imageUrls: PropTypes.arrayOf(PropTypes.string),
      quantity: PropTypes.number,
      popular: PropTypes.bool,
    })
  ),
};

export default Filters;
