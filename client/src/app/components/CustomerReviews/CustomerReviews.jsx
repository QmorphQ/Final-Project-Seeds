import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { downloadProductCommentsSelector, downloadProductRequestStateSelector, productSelector } from '../../../store/selectors/selectors';
import Spinner from '../../../ui/components/Spinner/Spinner.jsx';
import RenderComponent from '../../hoc/RenderComponent.jsx';
import { getCustomer } from '../../../store/thunks/customer.thunks';
import { useRating } from '../../../ui/components/ProductCard/useRating.jsx';
import { useStyles } from "./styles";
import { LinearProgressReview } from "./LinearProgressRewiew.jsx";
import { RatingBar } from "./RatingBar.jsx";

const CustomerReviewsRender = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomer());
    }, []);

    const product = useSelector(productSelector);
    const [ratingValue] = useRating(product);
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
                            <RatingBar />
                        </Box>
                    </Box>
                    <Divider variant="middle"/>
                    <Box className={classes.ratingNumbersContainer}>
                        {[...Array(5)].map((item, index) => (
                            <RenderComponent 
                                key={index}
                                loading={"success"}
                                data={{ rateNumber: index + 1 }}
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

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCustomer());
    }, []);

    const loading = useSelector(downloadProductRequestStateSelector);

    return (
        <RenderComponent
        loading={loading}
        data={{productComments}}
        renderSuccess={CustomerReviewsRender}
        loadingFallback={<span><Spinner /></span>}
        renderError={"error"}
        />
    )
}
  
export default CustomerReviews;