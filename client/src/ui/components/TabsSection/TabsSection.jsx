/* eslint-disable  */
import React from 'react';
import { makeStyles } from "@mui/styles";
import { Typography, Container, Grid } from '@mui/material';
import Tab from "../Tab/Tab.jsx"; 
import Tabs from "../Tabs/Tabs.jsx"; 
import Icon from "../Icon/Icon.jsx"; 

const useStyles = makeStyles(() => ({
        ourProductsContainer: {
            display: "flex",
            flexDirection: "column",
        },

        ourProductHeading: {
            marginBottom: "40px !important",
            fontWeight: "bold !important",
        },

        ourProductTabsContainer: {
            display: "flex",
            justifyContent: "center"
        },
        ourProductTabs: {
            marginBottom: "40px !important",
        }
    
}))

const categoriies = [
    {
        id: "All",
        name: "All", 
        parentId: "null",
        icon: "Leaf"
    },
    {
        id: "Bundles",
        name: "Bundles", 
        parentId: "null",
        icon: "Bundles"
    },
    {
        id: "vegetables",
        name: "vegetables", 
        parentId: "null",
        icon: "Tomato"
    },
    {
        id: "herbs",
        name: "herbs", 
        parentId: "null",
        icon: "CurlyLeaf"
    },
    {
        id: "flowers",
        name: "flowers", 
        parentId: "null",
        icon: "Flower"
    }

]

 const TabsSection = ({loading}) => {
    if(loading === "loading") return <div>Loading...</div>; // Here must be a loarer
    if(loading === "error") return <div>Error :(</div>; 
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const categoriesTabs = categoriies.map(category => <Tab label={category.name} id={category.id} key={category.id} icon={<Icon icon={Icon.icons[category.icon]}/>}/>)
    const classes = useStyles();

    return (
        <>
            <Container className={classes.ourProducts}>
                <Grid className={classes.ourProductsContainer}>
                    <Typography className={classes.ourProductHeading} variant="h3" component="h3">
                        Our products.
                    </Typography>
                    <div className={classes.ourProductTabsContainer}>
                        <Tabs className={classes.ourProductTabs} value={value} onChange={handleChange}>{categoriesTabs}</Tabs>
                    </div>

                </Grid>
            </Container>
        </>
    )
}

export default TabsSection;