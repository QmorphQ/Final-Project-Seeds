// import React from 'react';
import { Box, Paper, Typography, Divider, Rating, LinearProgress } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Star from "../../../ui/components/Icon/icons/Star.jsx";
// import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    customerReviewsContainer: {
        ...theme.mixins.wrapper,
        paddingTop: "60px",
        paddingBottom: "60px",
    },
    reviewsHeading: {
        fontWeight: "bold",
        color: theme.palette.common.black
    },
    reviewsRaitingContainer: {
        borderColor: theme.palette.common.white,
    },
    totalRatingContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "24px 0"
    },

    reviewsRatingHeading: {
        fontWeight: "bold",
    },

    reviewsQuantityContainer: {
        display: "flex",
        flexDirection: "column"
    },

    reviewsQuantity: {
        color: theme.palette.text.secondary
    },
   
    customerRating: {
        color: theme.palette.warning.main,
        "& .MuiRating-iconEmpty": {
            color: theme.palette.grey["300"]
        }
    },

    ratingNumbersContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "60%",
    },

    ratingWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },

    ratingNumber: {
        color: theme.palette.text.secondary,
        width: "9px"
    },

    ratingLinearProgress: {
            height: "9px",
            width: "173px",
            borderRadius: "35px",
            backgroundColor: theme.palette.grey["300"],

            "& .MuiLinearProgress-bar": {
                backgroundColor: theme.palette.warning.main,
            },
    },

    votesQuantity: {
        color: theme.palette.text.secondary,
        width: "17px"
    }


}));



const CustomerReviews = () => {
    const classes = useStyles();
    
    return (
    <>
    <Box component="section" className={classes.customerReviewsContainer}>

        <Typography
            className={classes.reviewsHeading}
            variant="h2"
            component="h2"
            >
            Customer Reviews.
        </Typography>

        <Box className={classes.reviewsRaitingContainer} 
            sx={{
                display: 'flex',
                '& > :not(style)': {
                m: 1,
                width: 350,
                height: 318,
                borderRadius: 6,
                },
            }}>

            <Paper variant="outlined">
                <Box className={classes.totalRatingContainer}>
                    <Typography
                    className={classes.reviewsRatingHeading}
                    variant="h2"
                    component="h2"
                    >
                    4,1
                    </Typography>
                    <Box className={classes.reviewsQuantityContainer}>
                        <Typography
                        className={classes.reviewsQuantity}
                        variant="subtitle1"
                        component="subtitle1"
                        >
                            124 reviews
                        </Typography>
                        <Rating 
                            className={classes.customerRating}
                            name="half-rating" defaultValue={4.5} precision={0.5}
                            onChange={e => e}
                        />
                    </Box>
                </Box>
                <Divider variant="middle"/>
                <Box className={classes.ratingNumbersContainer}>

                <Box className={classes.ratingWrapper}>
                    <Typography className={classes.ratingNumber} variant="subtitle1" component="subtitle1">5</Typography>
                    <Star />
                    <LinearProgress className={classes.ratingLinearProgress} variant="determinate" value={65} />
                    <Typography className={classes.votesQuantity} variant="subtitle1" component="subtitle1">81</Typography>
                </Box>

                <Box className={classes.ratingWrapper}>
                    <Typography className={classes.ratingNumber} variant="subtitle1" component="subtitle1">4</Typography>
                    <Star/>
                    <LinearProgress className={classes.ratingLinearProgress} variant="determinate" value={36} />
                    <Typography className={classes.votesQuantity} variant="subtitle1" component="subtitle1">45</Typography>
                </Box>

                <Box className={classes.ratingWrapper}>
                    <Typography className={classes.ratingNumber} variant="subtitle1" component="subtitle1">3</Typography>
                    <Star/>
                    <LinearProgress className={classes.ratingLinearProgress} variant="determinate" value={26} />
                    <Typography className={classes.votesQuantity} variant="subtitle1" component="subtitle1">32</Typography>
                </Box>

                <Box className={classes.ratingWrapper}>
                    <Typography className={classes.ratingNumber} variant="subtitle1" component="subtitle1">2</Typography>
                    <Star/>
                    <LinearProgress className={classes.ratingLinearProgress} variant="determinate" value={1} />
                    <Typography className={classes.votesQuantity} variant="subtitle1" component="subtitle1">1 </Typography>
                </Box>

                <Box className={classes.ratingWrapper}>
                    <Typography className={classes.ratingNumber} variant="subtitle1" component="subtitle1">1 </Typography>
                    <Star/>
                    <LinearProgress className={classes.ratingLinearProgress} variant="determinate" value={1} />
                    <Typography className={classes.votesQuantity} variant="subtitle1" component="subtitle1">1</Typography>
                </Box>
                </Box>

            </Paper>
        </Box>
    </Box>
    </>
    )
}
  

export default CustomerReviews;