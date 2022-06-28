import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Paper, Divider, Rating } from '@mui/material';
import { downloadProductCommentsSelector, getCustomerRequestStateSelector, productSelector } from '../../../store/selectors/selectors';
import Spinner from '../../../ui/components/Spinner/Spinner.jsx';
import RenderComponent from '../../hoc/RenderComponent.jsx';
import { getCustomer } from '../../../store/thunks/customer.thunks';
import { useRating } from '../../../ui/components/ProductCard/useRating.jsx';
import { useStyles } from "./styles";
import { LinearProgressReview } from "./LinearProgressRewiew.jsx";

const CustomerReviewsRender = () => {

    const product = useSelector(productSelector);
    const [ratingValue, rateProduct] = useRating(product);
    const productComments = useSelector(downloadProductCommentsSelector);

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
                        {ratingValue.toPrecision(2)}
                        </Typography>
                        <Box className={classes.reviewsQuantityContainer}>
                            <Typography
                            className={classes.reviewsQuantity}
                            variant="subtitle1"
                            >
                                {productComments.length} reviews
                            </Typography>
                            <Rating 
                                className={classes.customerRating}
                                name="half-rating" value={ratingValue} precision={1}
                                onChange={e => {
                                    rateProduct(e);
                                }}
                            />
                        </Box>
                    </Box>
                    <Divider variant="middle"/>
                    <Box className={classes.ratingNumbersContainer}>
                        {[...Array(5)].map((item, index) => (
                            <RenderComponent 
                                key={index}
                                loading={"success"}
                                data={{ ratingKey: index + 1, ratingValue }}
                                renderSuccess={LinearProgressReview}
                                loadingFallback={<span><Spinner /></span>}
                                renderError={"error"}
                            />
                        ))}
                    </Box>
    
                </Paper>
            </Box>
        </Box>
        </>
    )
}

const CustomerReviews = () => {
    
    const productComments = useSelector(downloadProductCommentsSelector);
    const loadingCustomer = useSelector(getCustomerRequestStateSelector);

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCustomer());
    }, []);

    return (
        <>
            <RenderComponent
                loading={loadingCustomer}
                data={{productComments}}
                renderSuccess={CustomerReviewsRender}
                loadingFallback={<span><Spinner /></span>}
                renderError={"error"}
            />
        </>
    )
}
  
export default CustomerReviews;