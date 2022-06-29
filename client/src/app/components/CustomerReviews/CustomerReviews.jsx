import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Paper, Divider, Rating } from '@mui/material';
import { downloadProductCommentsSelector, downloadProductRequestStateSelector, getCustomerRequestStateSelector, productSelector } from '../../../store/selectors/selectors';
import Spinner from '../../../ui/components/Spinner/Spinner.jsx';
import RenderComponent from '../../hoc/RenderComponent.jsx';
import { getCustomer } from '../../../store/thunks/customer.thunks';
import { useRating } from '../../../ui/components/ProductCard/useRating.jsx';
import { useStyles } from "./styles";
import { LinearProgressReview } from "./LinearProgressRewiew.jsx";
import { downloadRequestStates } from '../../constants';

const CustomerReviews = () => {

    const product = useSelector(productSelector);
    const [ratingValue, rateProduct] = useRating(product);
    const productComments = useSelector(downloadProductCommentsSelector);
    const loadingCustomer = useSelector(getCustomerRequestStateSelector);
    const loadProductStateSelector = useSelector(downloadProductRequestStateSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomer());
      }, []);

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
                                {productComments.length > 0 ? `${productComments.length} reviews` : `Loading...`}
                            </Typography>
                            <Rating 
                                defaultValue={0}
                                readOnly={loadingCustomer !== downloadRequestStates.SUCCESS}
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
                                loading={loadProductStateSelector}
                                data={{ ratingKey: index + 1, ratingValue }}
                                renderSuccess={LinearProgressReview}
                                loadingFallback={<span style={{marginLeft: "5px"}}><Spinner /></span>}
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
  
export default CustomerReviews;