import PropTypes from "prop-types";
import { Link as RouterLink } from 'react-router-dom';
import { Divider, MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenMobile({ arrOfOptions }) {
// =========================== Render ===============================
  return (
    <>
      {arrOfOptions.map((item, index) => (
        <div key={index}>
          <MenuItem>
            <Link
            component={RouterLink}
            to={`products/${item[0]}`}
              underline="none"
              sx={{ pl: "16px", color: "#1F2533", fontWeight: "400" }}
            >
              {`${item[1].charAt(0).toUpperCase()}${item[1].slice(1)}`
               }
            </Link>
          </MenuItem>
          <Divider />
        </div>
      ))}
    </>
  );
}

// =========================================================
MenuItemNoChildrenMobile.propTypes = {
  arrOfOptions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
