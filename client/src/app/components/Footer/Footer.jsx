import {
  Box,
  Typography,
  Link,
  Divider,
  Container,
  Grid,
  Hidden,
} from "@mui/material";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import Logo from "../Header/headerIcons/headerIcon/Logo.jsx";
import { useFooterStyles } from "./useFooterStyles";

export default function Footer() {
  const FooterClasses = useFooterStyles();
  return (
    <Container>
      <Box className={FooterClasses.LogoUp}>
        <Hidden smUp="xs">
          <Logo iconWidth={"130px"} iconHeight={"26px"} />
        </Hidden>
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
          <Hidden only="xs">
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              color="#4FA083"
            />
          </Hidden>
          <Grid item>
            <Link className={FooterClasses.Link} href="#" variant="body1">
              {"ABOUT SEEDRA"}
            </Link>
          </Grid>
        </Grid>
        <Grid item className={FooterClasses.LogoBox}>
          <Hidden smDown="xs">
            <Logo iconWidth={"130px"} iconHeight={"26px"} />
          </Hidden>
        </Grid>
        <Grid className={FooterClasses.GridContainer} container>
          <Grid item>
            <Link className={FooterClasses.Link} href="#" variant="body1">
              {"Terms&Conditions"}
            </Link>
          </Grid>
          <Hidden only="xs">
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              color="#4FA083"
            />
          </Hidden>
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
