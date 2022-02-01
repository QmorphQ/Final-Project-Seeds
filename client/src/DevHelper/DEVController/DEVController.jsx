import PropTypes from 'prop-types';
import { blue } from '@mui/material/colors';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import { DEVControllerStyles } from "./DEVControllerStyles.jsx";
// ===================================================================
// -------------------------------------------------------------------
// ++++++
// +++
function BtnsGroup({ handlers }) {
    const mainColor = blue[900];
  return (
    <ButtonGroup aria-label="vertical contained button group">
      {" "}
      {handlers.map((handlerPresset) => (
        <Button
        sx={{color: mainColor, backgroundColor: 'inherit'}}
          key={handlerPresset.text}
          onClick={() => handlerPresset.handler()}
          variant="outlined"
          endIcon={<SendIcon />}
        >
          {handlerPresset.text}
        </Button>
      ))}{" "}
    </ButtonGroup>
  );
}

export default function DEVComtroller({ listOfHandlers }) {
  return (
    <Box sx={DEVControllerStyles.container}>
      <Typography
        sx={{
          userSelect: "none",
        }}
        textAlign={"center"}
        variant="h6"
        color="initial"
        fontSize={"1em"}
      >
        TEST CONTROLLER
        <BtnsGroup handlers={listOfHandlers}/>
      </Typography>
    </Box>
  );
}

BtnsGroup.propTypes = {
    handlers: PropTypes.arrayOf(PropTypes.shape({
        handler: PropTypes.func,
        text: PropTypes.string,
      }))
}

DEVComtroller.propTypes = {
    listOfHandlers: PropTypes.arrayOf(PropTypes.shape({
        handler: PropTypes.func,
        text: PropTypes.string,
      }))
}