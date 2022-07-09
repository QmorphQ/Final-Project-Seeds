import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    AppLayout: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        width: '80%',
        justifyContent: 'space-between',
        height: '100Vh',
        margin: 'auto',
        [theme.breakpoints.down("sm")]:{
            
        }
    }
};

export default classes;