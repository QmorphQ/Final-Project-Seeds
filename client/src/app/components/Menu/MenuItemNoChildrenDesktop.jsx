import PropTypes from "prop-types";
import { MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenDesktop({
  parentsListWithoutChildren,
}) {
  return (
    <>
      {parentsListWithoutChildren.map((e, index) => (
        <div key={index}>
          <MenuItem
            sx={{ pt: 0 }}
          >
            <Link
              href={`/${e}`}
              underline="none"
              sx={{
                color: "#70737C",
                fontWeight: "500",
                display: "flex",
                fontSize: "14px",
              }}
            >
              {e.toUpperCase()}
            </Link>
          </MenuItem>
        </div>
      ))}
    </>
  );
}

MenuItemNoChildrenDesktop.propTypes = {
  parentsListWithoutChildren: PropTypes.array,
};
