
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useSelector, useDispatch } from 'react-redux'; 

import { MenuItem, TextField, Button } from '@mui/material'; 

import { productCategories } from '../../constants';  

import { adminAddProductRequestSelector } from '../../../store/selectors/selectors';
import { adminAddProductIdle } from '../../../store/actions/admin.actions';
import { adminAddProduct } from '../../../store/thunks/admin.thunks';




const validationSchema = yup.object({

    name: yup
        .string()
        .required('required'), 

    description: yup
        .string()
        .required('required'),

    categories: yup
        .string()
        .required('required'),

    currentPrice: yup
        .string()
        .required('required') 
        .matches(/[0-9\\.]/, 'value is not valid, please, enter a decimal number'),

    discountPrice: yup
        .string()
        .matches(/[0-9\\.]/, 'value is not valid, please, enter a decimal number'),

    packageDimensions: yup
        .string()
        .required('required'),

    currentRating: yup
        .string() 
        .max(3, 'too long value')
        .matches(/[0-9\\.]/, 'value is not valid, please, enter a decimal number'),

    quantity: yup
        .string()
        .required('required') 
        .max(4, 'too long value')
        .matches(/[0-9]/, 'value is not valid, please, enter a decimal number'),

    imageUrls: yup
        .string()
        .required('required'), 

  });




const AddProduct = () => {

    const isProductAdded = useSelector(adminAddProductRequestSelector);
    const dispatch = useDispatch();

    

    const formik = useFormik({
        initialValues: {
            name: '', 
            description: '', 
            categories: '', 
            currentPrice: '', 
            discountPrice: '', 
            packageDimensions: '', 
            currentRating: '', 
            quantity: '', 
            imageUrls: '', 
        }, 

        validationSchema, 

        onSubmit: (values) => { 
            
            dispatch(adminAddProduct(values)); 
            formik.resetForm(); 
        }
    });



    return (
        <>
            {isProductAdded === 'idle' &&
                <form onSubmit={formik.handleSubmit} >

                    <div style={{ margin: '3% 0',
                            display: 'flex', 
                            flexFlow: 'row wrap', 
                            justifyContent: 'space-between', 
                            width: '100%', }}>

                        <div style={{ margin: '3% 0',
                                    display: 'flex', 
                                    flexFlow: 'column wrap' }}>
                            <TextField 
                                name='name'
                                id='outlined-basic' 
                                label='name' 
                                variant='outlined' 
                                
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />  

                            <TextField 
                                name='description'
                                id='outlined-basic' 
                                label='description' 
                                variant='outlined' 
                                
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            /> 

                            <TextField
                                id='outlined-select-currency'
                                name='categories'
                                select
                                sx={{ width: 350, 
                                        m: '10px' }}
                                label='categories'
                                value={formik.values.categories}
                                onChange={formik.handleChange}
                                error={formik.touched.categories && Boolean(formik.errors.categories)}
                                helperText={formik.touched.categories && formik.errors.categories}
                            >
                                {productCategories.map((option) => (
                                    <MenuItem key={option.code} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField> 
                        </div>

                        <div style={{ margin: '3% 0',
                                    display: 'flex', 
                                    flexFlow: 'column wrap' }}>
                            <TextField 
                                name='currentPrice'
                                id='outlined-basic' 
                                label='currentPrice' 
                                variant='outlined' 
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.currentPrice}
                                onChange={formik.handleChange}
                                error={formik.touched.currentPrice && Boolean(formik.errors.currentPrice)}
                                helperText={formik.touched.currentPrice && formik.errors.currentPrice}
                            /> 

                            <TextField 
                                name='discountPrice'
                                id='outlined-basic' 
                                label='discountPrice (optional)' 
                                variant='outlined' 
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.discountPrice} 
                                onChange={formik.handleChange}
                                error={formik.touched.discountPrice && Boolean(formik.errors.discountPrice)}
                                helperText={formik.touched.discountPrice && formik.errors.discountPrice}
                            /> 

                            <TextField 
                                name='currentRating'
                                id='outlined-basic' 
                                label='currentRating (optional)' 
                                variant='outlined' 
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.currentRating} 
                                onChange={formik.handleChange}
                                error={formik.touched.currentRating && Boolean(formik.errors.currentRating)}
                                helperText={formik.touched.currentRating && formik.errors.currentRating}
                            /> 
                        </div>


                        <div style={{ margin: '3% 0',
                                    display: 'flex', 
                                    flexFlow: 'column wrap' }}>

                        <TextField 
                                name='quantity'
                                id='outlined-basic' 
                                label='quantity' 
                                variant='outlined' 
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.quantity} 
                                onChange={formik.handleChange}
                                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                                helperText={formik.touched.quantity && formik.errors.quantity}
                            /> 

                            <TextField 
                                name='packageDimensions'
                                id='outlined-basic' 
                                label='package dimensions' 
                                variant='outlined' 
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.packageDimensions} 
                                onChange={formik.handleChange}
                                error={formik.touched.packageDimensions && Boolean(formik.errors.packageDimensions)}
                                helperText={formik.touched.packageDimensions && formik.errors.packageDimensions}
                            />

                            <TextField 
                                name='imageUrls'
                                id='outlined-basic' 
                                label='image URL' 
                                variant='outlined' 
                                sx={{ width: 350, 
                                        m: '10px' }}
                                value={formik.values.imageUrls} 
                                onChange={formik.handleChange}
                                error={formik.touched.imageUrls && Boolean(formik.errors.imageUrls)}
                                helperText={formik.touched.imageUrls && formik.errors.imageUrls}
                            /> 
                        </div>
                    </div>

                    <div style={{ margin: '2% 10px 10%',  
                                display: 'flex', 
                                flexDirection: 'row' }}>
                        <Button 
                            size='large' 
                            color='success' 
                            variant='contained' 
                            type='submit'
                            sx={{
                                width: 220, 
                                backgroundColor: '#50a257', 
                                boxShadow: 1, 
                                color: 'white', 
                                ':hover': {
                                    backgroundColor: '#50a257',
                                }
                            }}
                        >
                            Add Product
                        </Button>
                    </div>
                </form>
            }

            {isProductAdded === 'success' && 
                <div style={{ margin: '15% 10px 15%',  
                            display: 'flex', 
                            flexDirection: 'row' }}>
                    <Button 
                        size='large' 
                        color='success' 
                        variant='contained' 
                        onClick={() => dispatch(adminAddProductIdle())}
                        sx={{
                        width: 220, 
                        backgroundColor: '#50a257', 
                        boxShadow: 1, 
                        color: 'white', 
                        ':hover': {
                            backgroundColor: '#50a257',
                        }
                        }}
                    >
                        Add One More
                    </Button> 

                
                    <span style={{ margin: '10px 0 0 30px', 
                            color: '#50a257', 
                            fontFamily: "'Lexend', sans-serif", }}>
                                    product has been added successfully
                    </span>
                </div>
            }
        </>
    );
}

export default AddProduct; 