import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Tab from "../../../ui/components/Tab/Tab.jsx";
import Tabs from "../../../ui/components/Tabs/Tabs.jsx";
import {Icon} from "../../../ui/components/Icon/Icon.jsx";
import { downloadRequestStates } from "../../constants";
import {
  downloadCategoriesRequestStateSelector,
  mainCategoriesSelector,
} from "../../../store/selectors/selectors";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
import { filterProductsByCategory } from "../../../store/thunks/products.thunks";

const useStyles = makeStyles((theme) => ({
  tab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexGrow: "1",
    "&:not(:last-child)": {
      marginRight: "12px",
    },
    "& > svg": {
      marginRight: "20px",
      color: theme.palette.primary.main,
    },
  },

  ourProducts: {
    ...theme.mixins.wrapper,
    paddingTop: "60px",
    paddingBottom: "60px",
  },
  navigation: {
    marginBottom: "25px",
  },
  ourProductHeading: {
    marginBottom: "40px !important",
    fontWeight: "bold !important",
  },
}));

const OurProducts = () => {
  const downloadRequestState = useSelector(
    downloadCategoriesRequestStateSelector
  );
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector(mainCategoriesSelector);
  if (downloadRequestState === downloadRequestStates.LOADING)
    return <div>Loading...</div>; // Here must be a loader
  if (downloadRequestState === downloadRequestStates.ERROR)
    return (
      <ErrorHandler
        errorMessage={
          "There is some problem with downloading product categories"
        }
      />
    );

  
 

  

  const handleClick = (event) => {
    dispatch(filterProductsByCategory(event.target.dataset.category));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  const categoriesTabs = categories.map((category) => (
    <Tab
      data-category={category.name}
      className={classes.tab}
      label={category.name}
      id={category.id}
      key={category.id}
      title={category.description}
      icon={<Icon icon={Icon.icons[category.icon]} />}
    />
  ));

  return (
    <>
      <Box component="section" className={classes.ourProducts}>
        <Box>
          <Box className={classes.navigation}>
            <Typography
              className={classes.ourProductHeading}
              variant="h2"
              component="h2"
            >
              Our products.
            </Typography>
            <Box>
              <Tabs value={value} onChange={handleChange} onClick={handleClick}>
                {categoriesTabs}
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

OurProducts.propTypes = {
  loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      currentPrice: PropTypes.number,
      categories: PropTypes.string,
      description: PropTypes.string,
      imageUrls: PropTypes.string,
      quantity: PropTypes.number,
      popular: PropTypes.bool,
    })
  ),
};

export default OurProducts;
