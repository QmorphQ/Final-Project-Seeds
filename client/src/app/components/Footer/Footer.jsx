import {
  Box,
  Typography,
  Link,
  Divider,
  Container,
  Grid,
} from "@mui/material";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import LogoBtn from "./FooterBtns/LogoBtn.jsx";
import { useFooterStyles } from "./useFooterStyles.jsx";

export default function Footer() {
  const FooterClasses = useFooterStyles();
  return (
    <Container>
     
      <Box className={FooterClasses.LogoUp}>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <LogoBtn iconWidth={"130px"} iconHeight={"26px"} />
        </Box>
      </Box>

      <Grid className={FooterClasses.BoxTop} container>
        <Grid className={FooterClasses.GridContainer} container>
          <Grid item>
            <Typography>
              <Link className={FooterClasses.Link} href="#" variant="body1">
                {"ALL PRODUCTS"}
              </Link>
            </Typography>
          </Grid>
          <Box sx={{ display: {  xs: "none", sm: "none", md: "block" } }}>
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              color="#4FA083"
            />
          </Box>
          <Grid item>
            <Link className={FooterClasses.Link} href="about-us" variant="body1">
              {"ABOUT SEEDRA"}
            </Link>
          </Grid>
        </Grid>
        <Grid item className={FooterClasses.LogoBox}>
          {/* <Hidden smDown="xs">
            <LogoBtn iconWidth={"130px"} iconHeight={"26px"} />
          </Hidden> */}
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <LogoBtn iconWidth={"130px"} iconHeight={"26px"} />
          </Box>
        </Grid>
        <Grid className={FooterClasses.GridContainer} container>
          <Grid item>
            <Link className={FooterClasses.Link} href="terms" variant="body1">
              {"Terms&Conditions"}
            </Link>
          </Grid>
          {/* <Hidden only="xs">
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              color="#4FA083"
            />
          </Hidden> */}
          <Box sx={{ display: {  xs: "none", sm: "none", md: "block" } }}>
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              color="#4FA083"
            />
          </Box>
          <Grid item>
            <Link className={FooterClasses.Link} href="#" variant="body1">
              {"Privacy Policy"}
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Box className={FooterClasses.BoxBottom}>
        <Box>
          <SocialNetworks />
        </Box>
        <Typography className={FooterClasses.FooterText}>
          All rights reserved
        </Typography>
      </Box>
    </Container>
  );
}


