import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, LinearProgress } from '@mui/material';
import PropTypes from "prop-types";
import { downloadProductCommentsSelector, productSelector } from '../../../store/selectors/selectors';
import Star from "../../../ui/components/Icon/icons/Star.jsx";
import { useStyles } from "./styles";
import { fetchProductComments } from '../../../store/thunks/comments.thunks';

export const LinearProgressReview = ({ data }) => {

    const {ratingKey, ratingComments} = data;

    const product = useSelector(productSelector);
    const productComments = useSelector(downloadProductCommentsSelector).filter(comment => comment.content === "rate only");
    
    const dispatch = useDispatch();

    useEffect(() => {
        product._id && dispatch(fetchProductComments(product._id));
    }, [ratingComments, product._id]);

    const classes = useStyles();

    return (
        <Box className={classes.ratingWrapper}>
            <Typography className={classes.ratingNumber} variant="subtitle1">{ratingKey}</Typography>
            <Star />
            <LinearProgress 
                className={classes.ratingLinearProgress} 
                variant={"determinate"}
                value={productComments.filter(item => Math.round(item.rate) === ratingKey).length * 100 / productComments.length} 
            />
            <Typography className={classes.votesQuantity} variant="subtitle1">{productComments.filter(item => Math.round(item.rate) === ratingKey).length}</Typography>
        </Box>
    )
} 

LinearProgressReview.propTypes = {
    data: PropTypes.shape({
        ratingKey: PropTypes.number,
        ratingComments: PropTypes.array,
    })
} 