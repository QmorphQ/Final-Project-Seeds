import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import { downloadProductCommentsSelector, productSelector } from '../../../store/selectors/selectors';
import { fetchProductComments } from '../../../store/thunks/comments.thunks';
import { useStyles } from "./styles";
import { useRating } from '../../../ui/components/ProductCard/useRating.jsx';

export const RatingBar = () => {

    const product = useSelector(productSelector);
    const [ratingValue, rateProduct] = useRating(product);
    const dispatch = useDispatch();
    const productComments = useSelector(downloadProductCommentsSelector);

    useEffect(() => {
        dispatch(fetchProductComments(product._id));
    }, [productComments]);

    const classes = useStyles();
    
    return (
        <Rating 
            className={classes.customerRating}
            name="half-rating" value={ratingValue} precision={1}
            onChange={e => {
                rateProduct(e);
            }}
        />
    )
};