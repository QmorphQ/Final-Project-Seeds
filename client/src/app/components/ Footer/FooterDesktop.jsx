import { Box, Typography, Link, Divider  } from '@mui/material';
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import PreloaderIcon from "../../../ui/components/Preloader/PreloaderIcon/PreloaderIcon.jsx";


export default function FooterDesktop() {

  return (
    <Box>
      <Box
        display="flex"
        sx={{ pl: "5%", pr: "5%", justifyContent: "space-between" }}
      >
        {/* <Box display="flex" sx={{flexDirection: "column", width: "45%"}}> */}
        <Box
          display="flex"
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{ mb: "24px", fontSize: 14, color: "#70737C" }}
          >
            {"ALL PRODUCTS"}
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ mb: "24px", fontSize: 14, color: "#70737C" }}
          >
            {"ABOUT SEEDRA"}
          </Link>
        </Box>
        <Typography
          display={{ xs: "none", sm: "none", md: "block" }}
          variant="h5"
          component="div"
          sx={{
            mb: "25px",
            flexGrow: 1,
            color: "#359740",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
         <PreloaderIcon iconWidth="130px" iconHeight="26px" />
        </Typography>

             {/* <Box display="flex" sx={{flexDirection: "column", width: "45%"}}> */}
             <Box display="flex" sx={{flexGrow: 1, justifyContent: "space-between", alignItems: "center"}} >
             <Link href="#" underline="none" sx={{mb: "24px", fontSize: 14, color: "#70737C"}}>{'ALL PRODUCTS'}</Link>
             <Link href="#" underline="none" sx={{mb: "24px", fontSize: 14, color: "#70737C"}}>{'ABOUT SEEDRA'}</Link>
             
             </Box>
             <Typography
            display={{ xs: "none", sm: "none", md: "block" }}
            variant="h5"
            component="div"
            sx={{mb: "25px", flexGrow: 1, color: "#359740", fontWeight: "bold", textAlign: "center" }}
          >
            SEEDRA
             </Typography>
             
            {/* <Box display="flex" sx={{flexDirection: "column", width: "45%"}}> */}
            <Box display="flex" sx={{flexGrow: 1, justifyContent: "space-between", alignItems: "center"}}>
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


