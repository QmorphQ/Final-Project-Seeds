import { Button } from "@mui/material";
import { Link } from "react-router-dom";


export default function Auth () {


    return(
        <>
            <Link to="/login" style={{ textDecoration: 'none' }}><Button sx={{mr:1, mt:1, height:40, width:100, fontSize:14}}  color="primary" variant="text">Log In</Button></Link>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}><Button sx={{mr:1, mt:1, height:40, width:100, fontSize:14}}  variant="outlined">Sign up</Button></Link> 
        </>
        
    )
}