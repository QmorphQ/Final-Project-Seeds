import { Link as RouterLink } from 'react-router-dom';
import { MenuItem, Link } from "@mui/material";

export default function MenuItemNoChildrenDesktop() {
  return (
    <>
      {[['products', 'all'], ['preview', 'bundles']].map((e, index) => (
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

