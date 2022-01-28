import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import Divider from "@mui/material/Divider";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";


export default function Footer() {

  return (
    <Box>
            <Typography
            variant="h5"
            component="div"
            sx={{mb: "36px", flexGrow: 1, color: "#359740", fontWeight: "bold", textAlign: "center" }}
          >
            SEEDRA
             </Typography>
             
             <Box display="flex" sx={{pl:"5%", pr:"5%", justifyContent: "space-between"}} >
             <Box display="flex" sx={{flexDirection: "column", width: "45%"}}>
             <Link href="#" underline="none" sx={{mb: "24px", fontSize: 14, color: "#70737C"}}>{'ALL PRODUCTS'}</Link>
             <Link href="#" underline="none" sx={{mb: "24px", fontSize: 14, color: "#70737C"}}>{'ABOUT SEEDRA'}</Link>
             <Link href="#" underline="none" sx={{mb: "24px", fontSize: 14, color: "#70737C"}}>{'OUR BLOG'}</Link>
             </Box>
            <Box display="flex" sx={{flexDirection: "column", width: "45%"}}>
            <Link href="#" underline="none" sx={{mb: "24px", fontSize: 14, color: "#70737C"}}>{'Terms&Conditions'}</Link>
             <Link href="#" underline="none" sx={{fontSize: 14, color: "#70737C"}}>{'Privacy Policy'}</Link>
            </Box>
             </Box>
             <Divider />
             <Box display="flex" sx={{pl:"5%", pr:"5%", justifyContent: "space-between", alignItems: "center"}} >
            <Box>
            <SocialNetworks />
            </Box>
            
             <Typography
            component="span"
            sx={{ fontSize: 14, color: "#70737C" }}
          >
            All rights reserved
             </Typography>
             
             </Box>
            
    </Box>
     
     
   
  );
};


