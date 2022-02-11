// import { Link as RouterLink} from 'react-router-dom';
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import MoreIcon from "@mui/material/MoreIcon";
import MenuItem from "@mui/material/MenuItem";
// =====================================================

export default function MenuTablet() {
  // Pressets:
  const [dropDownOpen, setDropDownOpen] = useState(null);
  const showDropdown = (e) => {
    const { id } = e.target;
    return setDropDownOpen((prevState) => (id !== prevState && id) || null);
  };
  return (
    <Box
      id={e.parentId}
      sx={{ boxShadow: "none", my: "0px", position: "relative" }}
    >
      <MenuItem
        fontWeight="700"
        sx={{
          color: "#70737C",
          fontSize: "14px",
          pt: 0,
          position: "relative",
        }}
      >
        CATEGORY
        <MoreIcon id={e.parentId} onClick={showDropdown} />
      </MenuItem>
    </Box>
  );
}
