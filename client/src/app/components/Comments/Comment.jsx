// Imports:
// Libraries:
import PropTypes from "prop-types";
// React Components:
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
// Styles:
import "./SwiperCSS.css";
import { red } from "@mui/material/colors";
// Others:
// =======================================================

// =======================================================
export default function Comment(props) {
  return (
    <Card
      className="comment-card"
      sx={{
        maxWidth: 300,
        borderRadius: "12px",
        maxHeight: "400px",
        overflow: "auto",
      }}
    >
      <Paper square elevation={0} className={"comment-header"}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={props.imgPath}
            />
          }
          sx={{ color: "text.disabled" }}
          title={props.title}
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
          {props.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
// =======================================================

Comment.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  imgPath: PropTypes.string,
  subheader: PropTypes.string,
};
