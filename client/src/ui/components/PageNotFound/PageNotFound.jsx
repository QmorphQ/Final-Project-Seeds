import React from 'react';
// import { useLocation } from 'react-router-dom';
import img from './img/not-found.png';
import styles from './PageNotFound.module.css';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

const PageNotFound = () => {
    // let location = useLocation();

    return (
<>
      {/* <CssBaseline /> */}
      <Container maxWidth="sm">
        <Box  sx={{ display:'flex', flexDirection: 'column',  alignItems: 'center', bgcolor: '#eaf1eb', height: '100vh' }}>
           <img className={styles.img} src={img} alt="Not Found"/>
           <p className={styles.text}>No match for {location.pathname}</p>
           <Link href="#">Return to home page</Link>
        </Box>
      </Container>
</>
    )
}





// const routesConfig = [


//     {
//         path: '/not-found',
//         element: <PageNotFound />
//     },
//     {
//         path: '*',
//         element: <PageNotFound />
//     },
// ];

export default PageNotFound;
