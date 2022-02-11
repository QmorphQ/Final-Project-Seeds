import { Link as RouterLink } from 'react-router-dom';
import PropTypes from "prop-types";
import { MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenDesktop({ arrOfOptions }) {
  return (
    <>
      {arrOfOptions.map((e, index) => (
        <div key={index}>
          <MenuItem
            sx={{ pt: 0 }}
          >
            <Link
            component={RouterLink}
            to={`${e[0]}`}
              underline="none"
              sx={{
                color: "#70737C",
                fontWeight: "500",
                display: "flex",
                fontSize: "14px",
              }}
            >
              {e[1].toUpperCase()}
            </Link>
          </MenuItem>
        </div>
      ))}
    </>
  );
}

// ==========================================================
MenuItemNoChildrenDesktop.default ={
  arrOfOptions: ['option1', 'option1', 'option1'],
};
MenuItemNoChildrenDesktop.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.string),
};
