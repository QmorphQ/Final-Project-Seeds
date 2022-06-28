import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, LinearProgress } from '@mui/material';
import PropTypes from "prop-types";
import { downloadProductCommentsSelector, productSelector } from '../../../store/selectors/selectors';
import Star from "../../../ui/components/Icon/icons/Star.jsx";
import { useStyles } from "./styles";
import { fetchProductComments } from '../../../store/thunks/comments.thunks';

export const LinearProgressReview = ({ data }) => {
    const { ratingKey, ratingValue } = data;
    const productComments = useSelector(downloadProductCommentsSelector);

    const product = useSelector(productSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        product._id && dispatch(fetchProductComments(product._id));
    }, [ratingValue, product._id]);

    const classes = useStyles();
    const rateComments = productComments?.filter(comment => comment.content === "rate only");

    return (
        <Box className={classes.ratingWrapper}>
            <Typography className={classes.ratingNumber} variant="subtitle1">{ratingKey}</Typography>
            <Star />
            <LinearProgress 
                className={classes.ratingLinearProgress} 
                variant={"determinate"}
                value={rateComments.filter(item => Math.round(item.rate) === ratingKey).length * 100 / rateComments.length} 
            />
            <Typography className={classes.votesQuantity} variant="subtitle1">{rateComments.filter(item => Math.round(item.rate) === ratingKey).length}</Typography>
        </Box>
    )
} 

LinearProgressReview.propTypes = {
    data: PropTypes.shape({
        ratingKey: PropTypes.number,
        ratingValue: PropTypes.number,
    })
} 