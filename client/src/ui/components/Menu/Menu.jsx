import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from '@mui/material/Link';
import SearchAppBar from "../SearchAppBar/SearchAppBar.jsx";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";

export default function Menu() {

  return (


    <Box display={{ xs: "flex", sm: "block", md: "none" }} sx={{flexWrap: "wrap"}}>
    <Paper  sx={{p: 2, width: "50%", maxWidth: "100%", position: "absolute", left: "45%", boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)"}}>
      {/* <Box display={{ xs: "flex", sm: "block", md: "none" }} sx={{flexWrap: "wrap"}}> */}
      <SearchAppBar />
      
        <MenuList>
       
        <MenuItem>
          <ListItemText>All vegetables</ListItemText>
        </MenuItem>
        
      {/* <MenuList>
        <MenuItem>
          <ListItemText>All vegetables</ListItemText>
        </MenuItem> */}
        
        <Accordion sx={{boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem >
              <ListItemText>Bundles</ListItemText>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
          <Link href="#" underline="none">{'12 Herb Seeds'}</Link>
              
           
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem>
              <ListItemText>Herbs</ListItemText>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem>
              <ListItemText>Vegetables</ListItemText>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem>
              <ListItemText>Fruits</ListItemText>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem>
              <ListItemText>Supplies</ListItemText>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{boxShadow: "none"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MenuItem>
              <ListItemText>Flowers</ListItemText>
            </MenuItem>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Divider />
        <MenuItem>
          <ListItemText>Our blog</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>About Seedra</ListItemText>
        </MenuItem>
        <Divider />
        {/* <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <FacebookOutlinedIcon />
        </IconButton> */}
        <SocialNetworks />
      </MenuList>
      {/* </Box> */}
    </Paper>
    </Box>
    
  );
};


