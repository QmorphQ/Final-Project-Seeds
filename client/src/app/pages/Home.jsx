import React from 'react';
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';
import Tab from "../../ui/components/Tab/Tab.jsx"; 
import Tabs from "../../ui/components/Tabs/Tabs.jsx"; 
import Icon from "../../ui/components/Icon/Icon.jsx"; 

const useStyles = makeStyles(() => ({
        ourProducts: {
            maxWidth: "1110px",   
        },
        ourProductHeading: {
            marginBottom: "40px !important",
            fontWeight: "bold !important",
        }
    
}))

const categories = [
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
        id: "Herbs",
        name: "Herbs", 
        parentId: "null",
        icon: "CurlyLeaf"
    }

]

 const Home = () => {

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const categoriesTabs = categories.map(category => <Tab label={category.name} id={category.id} key={category.id} icon={<Icon icon={Icon.icons[category.icon]}/>}/>)
     const classes = useStyles()
  return (
      <>
      <main>
          <section className={classes.ourProducts}>
              <div>
                <Typography className={classes.ourProductHeading} variant="h1" component="h2">
                    Our products.
                </Typography>
                <div>
                    <Tabs value={value} onChange={handleChange}>
                       {categoriesTabs} 
                    </Tabs>
                </div>

            </div>
          </section>
      </main>
      </>
  )
}

export default Home;