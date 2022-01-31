import PropTypes from "prop-types";
import Link from "@mui/material/Link";
import PreloaderIcon from "../../../../../ui/components/Preloader/PreloaderIcon/PreloaderIcon.jsx";

const Logo = (props) => {
  const { iconWidth, iconHeight } = props;

  const RoutesName = {
    home: "/",
  };

  return (
    <Link href={RoutesName.home} underline="none">
      {<PreloaderIcon iconWidth={iconWidth} iconHeight={iconHeight} />}
    </Link>
  );
};

Logo.propTypes = {
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
};

export default Logo;
