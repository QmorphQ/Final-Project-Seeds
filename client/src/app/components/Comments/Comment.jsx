import PropTypes from 'prop-types';

import {
  Box,
  Typography,
  Paper,
  CardHeader,
  Avatar,
  CardContent,
  Rating,
  Card,
} from "@mui/material";
import { red } from "@mui/material/colors";
import "./SwiperCSS.css";

export default function Comment(props) {
  const classes = {
    root: {
      maxWidth: "100%",
      position: "relative",
      margin: "0 auto",
      height: "100%",
    },
    header: {
      display: "flex",
      alignItems: "center",
    },
  };

  return (
    <Card
      className="comment-card"
      sx={{
        maxWidth: 300,
        borderRadius: "12px",
        maxHeight: "400px",
        overflow: "auto"
      }}
    >
      <Paper square elevation={0} className={classes.header}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              /* eslint-disable-next-line no-undef,react/prop-types */
              src={props.imgPath}
            />
          }
          sx={{ color: "text.disabled" }}
          /* eslint-disable-next-line no-undef,react/prop-types */
          title={props.title}
          /* eslint-disable-next-line no-undef,react/prop-types */
          subheader={props.subheader}
        />
      </Paper>

      <Box pl={2}>
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.1}
          readOnly
        />
      </Box>

      <CardContent>
        <Typography variant="body2" color="text.disabled">
          {/* eslint-disable-next-line react/prop-types */}
         
            {props.text}
        
        </Typography>
      </CardContent>
    </Card>
  );
}

Comment.propTypes = {
 text: PropTypes.string
}