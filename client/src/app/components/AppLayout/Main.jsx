import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import classes from './AppLayoutStyle.jsx';

export default function Main({ children }) {
    return(
        <Box sx={classes.Main}>{children}</Box>
    )
};

Main.propTypes = {
    children: PropTypes.element,
};