import PropTypes from "prop-types";
import { Divider, MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenMobile() {
  return (
    <>
      {["all",
, "bundles"].map((item, index) => (
        <div key={index}>
          <MenuItem>
            <Link
              href={`/${item}`}
              underline="none"
              sx={{ pl: "16px", color: "#1F2533", fontWeight: "400" }}
            >
              {item === "all"
                ? `${item.charAt(0).toUpperCase()}${item.slice(1)}vegetables`
                : `${item.charAt(0).toUpperCase()}${item.slice(1)}`}
            </Link>
          </MenuItem>
          <Divider />
        </div>
      ))}
    </>
  );
}

// MenuItemNoChildrenMobile.propTypes = {
//   parentsListWithoutChildren: PropTypes.array,
// };
