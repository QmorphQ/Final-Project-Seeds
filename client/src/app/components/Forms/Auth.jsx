import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";


export default function Auth () {


    return(
        <Box sx={{xs: {width: 'fit-content', display: "flex", flexDirection: 'row'}, md: {width: 'fit-content', display: "flex", flexDirection: 'column'}}}>
            <Link to="/login" style={{ textDecoration: 'none' }}><Button sx={{ height:20, width:80, fontSize:10}}  color="primary" variant="text">Log In</Button></Link>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}><Button sx={{ height:20, width:80, fontSize:10}} color="primary" variant="text">Sign up</Button></Link> 
        </Box>
        
    )
};