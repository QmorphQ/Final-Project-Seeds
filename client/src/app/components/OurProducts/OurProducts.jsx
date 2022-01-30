import React from 'react';
import { makeStyles } from "@mui/styles";
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import Tab from "../../../ui/components/Tab/Tab.jsx"; 
import Tabs from "../../../ui/components/Tabs/Tabs.jsx"; 
import Icon from "../../../ui/components/Icon/Icon.jsx"; 
import ProductsList from '../ProductsList/ProductsList.jsx';
import { downloadRequestStates } from '../../constants';
import { mainCategoriesSelector } from "../../../store/selectors/selectors";



const useStyles = makeStyles((theme) => ({
        tab: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexGrow: "1",
            "&:not(:last-child)": {
                marginRight: "12px"
            },
            "& > svg": {
                marginRight: "20px"
            }
        },

        ourProducts: {
            ...theme.mixins.wrapper, 
            paddingTop: "60px",
            paddingBottom: "60px" 
        },
        navigation: {
            marginBottom: "25px"
        },
        ourProductHeading: {
            marginBottom: "40px !important",
            fontWeight: "bold !important",
        }
    
}))


 const OurProducts = ({loading, productList}) => {
    if(loading === downloadRequestStates.LOADING) return <div>Loading...</div>; // Here must be a loader
    if(loading === downloadRequestStates.ERROR) return <div>Error :(</div>; 
    
    const categories = useSelector(mainCategoriesSelector)

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();

    const categoriesTabs = categories.map(category => <Tab className={classes.tab} label={category.name} id={category.id} key={category.id} title={category.description} icon={<Icon icon={Icon.icons[category.icon]}/>}/>)

    return (
        <>
            <Box component="section" className={classes.ourProducts}>
            <Box> 
                <Box className={classes.navigation}>
                    <Typography className={classes.ourProductHeading} variant="h3" component="h3">
                        Our products.
                    </Typography>
                    <Box>
                        <Tabs value={value} onChange={handleChange}>{categoriesTabs}</Tabs>  
                    </Box>
                </Box>
                <ProductsList products={productList} loading={loading} />
            </Box>  
            </Box>
        </>
    )
}

OurProducts.propTypes = {
        loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
        productList: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          currentPrice: PropTypes.number,
          categories: PropTypes.string,
          description: PropTypes.string,
          imageUrls: PropTypes.arrayOf(PropTypes.string),
          quantity: PropTypes.number,
          popular: PropTypes.bool,
        }))
    
}

export default OurProducts;