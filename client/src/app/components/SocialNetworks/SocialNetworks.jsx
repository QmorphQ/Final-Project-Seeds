import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import useStyles from '../Header/HeaderStyles.jsx';

const SocialNetworks = () => {
  const classes = useStyles();
    return (
      <>
        <IconButton >
        <InstagramIcon className={classes.iconsStyle} />
      </IconButton>
      <IconButton >
        <FacebookOutlinedIcon className={classes.iconsStyle} />
      </IconButton>  
      </>    
    );
  };

  export default SocialNetworks;
  
  

