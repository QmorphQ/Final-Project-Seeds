import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Drawer, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/ Footer/Footer.jsx";
import { API, downloadRequestStates } from "../constants";
import ProductsListFilters from "../components/ProductsList/ProductsListFilters.jsx";
import SortBySelect from "../../ui/components/SortBySelect/SortBySelect.jsx";

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

const Filters = ({ loading }) => {
  const classes = useStyles();

  const defaultUSP = new URLSearchParams({
    perPage: 6,
    startPage: 1,
    sort: "-currentPrice",
  });

  const [selectedValue, setSelectedValue] = useState("most");
  const [queryParams, setQueryParams] = useState(defaultUSP);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const queryString = `${API}products/filter?${queryParams}`;
    axios
      .get(queryString)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const queryString = `${API}products/filter?${queryParams}`;
    axios
      .get(queryString)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.log(error));
  }, [queryParams]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);

    if (event.target.value === "less") {
      const usp = new URLSearchParams({
        perPage: 6,
        startPage: 1,
        sort: "currentPrice",
      });
      setQueryParams(usp);
    } else {
      setQueryParams(defaultUSP);
    }
  };

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
                <SortBySelect
                  selectedValue={selectedValue}
                  handleChange={handleChange}
                />
                <Typography variant="p" className={classes.filterName}>
                  By categories
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
          <ProductsListFilters loading={loading} productList={products} />
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
