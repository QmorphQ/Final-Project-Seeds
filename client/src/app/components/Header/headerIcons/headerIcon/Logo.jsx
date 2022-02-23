import PropTypes from "prop-types";
import PreloaderIcon from "../../../../../ui/components/Preloader/PreloaderIcon/PreloaderIcon.jsx";

const Logo = (props) => {
  const { iconWidth, iconHeight } = props;
  return (
      <PreloaderIcon iconWidth={iconWidth} iconHeight={iconHeight} />
  );
};

Logo.propTypes = {
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
};

export default Logo;
