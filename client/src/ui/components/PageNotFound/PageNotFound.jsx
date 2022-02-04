import { Container, Link, Typography } from "@mui/material";
import img1 from "./img/fresh-sweet-basil-leaves-isolated-white-background 1.svg";
import img2 from "./img/fresh-sweet-basil-leaves-isolated-white-background 4 (1).svg";
import img3 from "./img/logo.svg";
// import { useLocation } from 'react-router-dom';


function PageNotFound() {
// let location = useLocation();

  return (
    <>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          padding: "30px",
          bgcolor: "#eaf1eb",
          backgroundImage: "",
          height: "80vh",
          borderRadius: "5%",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize="100px"
          lineHeight="0.8"
          paddingTop="10px"
          align="center"
          variant="body1"
          color="text.secondary"
        >
          404
        </Typography>

        <Typography
          sx={{ marginTop: "0px" }}
          fontSize="30px"
          paddingTop="10px"
          align="center"
          variant="body1"
          color="text.secondary"
        >
          PAGE NOT FOUND
        </Typography>

        <Typography align="center">
          <Link href="#">Return to home page</Link>
        </Typography>

        <Typography align="center">
          <img src={img1} alt="lief" />
          <Link href="#">
            <img src={img3} alt="logo" />
          </Link>
          <img src={img2} alt="lief" />
        </Typography>
      </Container>
    </>
  );
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
