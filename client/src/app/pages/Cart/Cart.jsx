import {Box, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux"; 
import PropTypes from 'prop-types';
import ProductCard from "../../../ui/components/ProductCard/ProductCard.jsx";
import { downloadRequestStates } from "../../constants/index";

const useStyles = makeStyles((theme) => ({
    yourCartHeading: {
        marginBottom: "40px !important",
        marginTop: "40px !important",
        fontWeight: "bold !important",
        marginLeft: "210px"
      },
    cartItem: {
        display: "flex",
        "& .MuiPaper-root": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            "& .MuiCardMedia-img": {
                width: "64px",
                height: "63px"
            },
            "& .MuiTypography-root": {
                fontSize: "14px",
                LineHeight: "24.95px"
            }
        }
    },
    cartContainer: {
        display: "flex",
        flexDirection: "row",
    },
    cartList: {
        display: "flex",
        flexDirection: "column",
        width: "750px",
        marginLeft: "165px"
    },

    totalResultContainer: {
        width: "350px",
        border: "1px",
        color: theme.palette.grey
    },

    orderSummeryHeading: {
        fontWeight: "bold !important",
        marginLeft: "34px"
    },

    totalPrice: {
        color: theme.palette.primary.main,
        width: "350px"
    }, 
}))

const Cart = ({ loading }) => { 
    let totalPrice = 0;
    // const products = useSelector(state => state.products.productList) || []; 
    // const products = useSelector(state => state.products.filteredProducts) || []; 
    const cart = useSelector(state => state.cart.cart) || []
    const classes = useStyles();
 
    const products = [
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484997/812wIg6b_3S._AC_SL1500__fqqr7j.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c2b3481e16304cbbbda1",
            "name": "seedra 15 herb seeds variety pack for indoor and outdoor planting - hydroponic gardening - 4500+ seeds - non gmo and heirloom",
            "currentPrice": 18.89,
            "categories": "herbs-mix",
            "description": "SEEDRA 15 Herb Seeds Variety Pack contains 15 herbs - Basil, Thyme, Lavender, Sage, Parsley, Chives, Rosemary, Tarragon, Oregano, Fennel, Mint, Cilantro, Lemon Mint, Savory, Dill. Free Tools - professional instructions, pH tester, 15 plant markers",
            "currentRating": 4.5,
            "itemNo": "912281",
            "date": "2022-01-30T16:54:11.396Z",
            "__v": 0,
            "discountPrice": 15.89,
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484997/812wIg6b_3S._AC_SL1500__fqqr7j.jpg"
            ],
            "quantity": 100,
            "_id": "629f923ef13d341ba8aa40a9",
            "name": "seedra 15 specific herb seeds variety pack for indoor and outdoor planting - hydroponic gardening - 4500+ seeds - non gmo and heirloom",
            "currentPrice": 18.89,
            "categories": "herbs-mix",
            "description": "SEEDRA 15 Herb Seeds Variety Pack contains 15 herbs - Basil, Thyme, Lavender, Sage, Parsley, Chives, Rosemary, Tarragon, Oregano, Fennel, Mint, Cilantro, Lemon Mint, Savory, Dill. Free Tools - professional instructions, pH tester, 15 plant markers",
            "currentRating": 4.5,
            "discountPrice": 15.89,
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ],
            "packageDimensions": "8 x 5.75 x 0.2 inches",
            "itemNo": "476443",
            "date": "2022-06-07T18:00:30.200Z",
            "__v": 0
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484416/91gY2bGUn4S._AC_SL1500__ye2qz3.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c254481e16304cbbbd8c",
            "name": "seedra 600 lettuce buttercrunch seeds for indoor and outdoor planting - gmo-free and heirloom seeds - 1 pack",
            "currentPrice": 17,
            "categories": "vegetables-mono",
            "description": "SEEDRA Lettuce Buttercrunch - contains 600 seeds in 1 Pack and professional instructions",
            "currentRating": 4.5,
            "itemNo": "252791",
            "date": "2022-01-30T16:52:36.668Z",
            "__v": 0,
            "discountPrice": 14,
            "origin": "french",
            "maturation": "early",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484709/91DKOn0ouYL._AC_SL1500__xjrdic.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c27f481e16304cbbbd98",
            "name": "seedra wildflower mix seeds for indoor and outdoor planting - 2.8 oz - heirloom seeds - 1 pack",
            "currentPrice": 16.06,
            "categories": "flowers-mix",
            "description": "SEEDRA Wildflower Mix Seeds - contains 2.8 oz in 1 Pack - a total of 25 easy-to-grow annual and perennial. The mix features 60% annual and 40% perennial wildflowers",
            "currentRating": 4.5,
            "itemNo": "712702",
            "date": "2022-01-30T16:53:19.892Z",
            "__v": 0,
            "discountPrice": 13.06,
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484834/91PmQ9TiQQL._AC_SL1500__y0m2gu.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c2a5481e16304cbbbd9e",
            "name": "seedra 12 herb seeds variety pack for indoor, outdoor planting - hydroponic gardening - 3500+ seeds - non gmo and heirloom - basil, thyme, lavender, sage, parsley, mint, cilantro and more",
            "currentPrice": 15.86,
            "categories": "herbs-mix",
            "description": "SEEDRA 12 Herb Seeds Variety Pack contains 12 herbs - Basil, Thyme, Lavender, Sage, Parsley, Chives, Rosemary, Tarragon, Oregano, Fennel, Mint, Cilantro. Free Tools - professional instructions, pH tester, 12 plant markers",
            "currentRating": 4.5,
            "itemNo": "844233",
            "date": "2022-01-30T16:53:57.375Z",
            "__v": 0,
            "discountPrice": 12.86,
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484359/91I46b6BiXL._AC_SL1500__xsjxib.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c249481e16304cbbbd89",
            "name": "seedra 9 radishes - 2500 seeds for planting outdoors and indoors home garden - seed variety pack for sprouting - non gmo and heirloom - watermelon, daikon, french breakfast, cherry belle & more",
            "currentPrice": 15.76,
            "categories": "vegetables-mix",
            "description": "SEEDRA Radish Seeds Variety Pack contains 9 radishes - Watermelon, German Giant, Purple Plum, French Breakfast, Cherry Belle, Champion, White Icicle, Black Spanish Round Winter, Japanese Minowase Winter (Daikon). Free Tools - professional instructions, pH tester, 9 plant markers.",
            "currentRating": 4.5,
            "itemNo": "793666",
            "date": "2022-01-30T16:52:25.529Z",
            "__v": 0,
            "discountPrice": 12.76,
            "origin": "english",
            "maturation": "late",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://cdn.shopify.com/s/files/1/0644/7815/0887/products/91xJerg9MHL._AC_SL1500.jpg?v=1652214949"
            ],
            "quantity": 19,
            "_id": "62a45586a347d54340cc0d31",
            "name": "seedra 3 peppers",
            "description": "3 Bell Pepper Seeds Variety Pack contains 150+ pepper seeds - California Cal Wonder, Big Red Bell, Golden Cal Wonder and Free 350+ Lettuce seeds - Buttercrunch. Tools - professional instructions, pH tester, 4 plant markers Be Sure Of Our Quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee",
            "categories": "vegetables-mix",
            "currentPrice": 15.59,
            "discountPrice": 11.34,
            "packageDimensions": "3 x 6 x 2.3 inches",
            "currentRating": 4.4,
            "itemNo": "215713",
            "date": "2022-06-11T08:42:46.087Z",
            "__v": 0
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484490/91MdUTdwJAL._AC_SL1500__iwuov7.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c269481e16304cbbbd92",
            "name": "seedra 8 onions - 200 seeds for planting outdoors and indoors home garden - seed variety pack for sprouting - non gmo and heirloom - yellow, red, white & green onion seeds for cooking",
            "currentPrice": 14.29,
            "categories": "vegetables-mix",
            "description": "SEEDRA Onion Seeds Variety Pack contains 8 onions - Walla Walla, Yellow Sweet Spanish, Crystal White Wax, Tokyo Long White Bunching, Southport Red Globe, White Sweet Spanish, Crimson Forest Bunching, Tropeana Lunga. Free Tools - professional instructions, pH tester, 8 plant markers.",
            "currentRating": 4.5,
            "itemNo": "457886",
            "date": "2022-01-30T16:52:57.671Z",
            "__v": 0,
            "discountPrice": 11.29,
            "origin": "mexican",
            "maturation": "early",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484452/91vlm35yyZL._AC_SL1500__civicp.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c25e481e16304cbbbd8f",
            "name": "seedra 5 beets - 530 seeds for planting outdoors and indoors home garden - seed variety pack - non gmo and heirloom - chioggia, cylindra, detroit dark red, ruby queen, bulls blood",
            "currentPrice": 13.92,
            "categories": "vegetables-mix",
            "description": "SEEDRA Beet Seeds Variety Pack contains 5 beets - Chioggia, Cylindra, Detroit Dark Red, Ruby Queen, Bulls Blood. Free Tools - professional instructions, pH tester, 5 plant markers.",
            "currentRating": 4.5,
            "itemNo": "351153",
            "date": "2022-01-30T16:52:46.809Z",
            "__v": 0,
            "discountPrice": 10.92,
            "origin": "american",
            "maturation": "late",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484267/91T245iEpHL._AC_SL1500__phjw3h.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c207481e16304cbbbd80",
            "name": "seedra 6 carrots - 1385 seeds for planting outdoors and indoors home garden - seed variety pack - non gmo & heirloom - chantenay red cored, imperator, scarlet nantes, solar yellow & more",
            "currentPrice": 13.21,
            "categories": "vegetables-mix",
            "description": "SEEDRA Сarrot Seeds Variety Pack contains 6 carrots - Chantenay Red Cored, Imperator, Scarlet Nantes, Solar Yellow, Lunar White, Black Nebula. Free Tools - professional instructions, pH tester, 6 plant markers.",
            "currentRating": 4.5,
            "itemNo": "131449",
            "date": "2022-01-30T16:51:19.544Z",
            "__v": 0,
            "discountPrice": 10.21,
            "origin": "american",
            "maturation": "late",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484201/913SN14BSUL._AC_SL1500__xeij0v.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c213481e16304cbbbd83",
            "name": "seedra 4 beans - 125 seeds for planting outdoors and indoors home garden - seed variety pack - non gmo and heirloom - red, yellow and green beans bush for sprouting",
            "currentPrice": 12.74,
            "categories": "vegetables-mix",
            "description": "SEEDRA Bean Seeds Variety Pack contains 4 beans - Royal Burgundy, Henderson Lima Bush, Shell - Pinto, Golden Wax. Free Tools - professional instructions, pH tester, 4 plant markers.",
            "currentRating": 4.5,
            "itemNo": "954601",
            "date": "2022-01-30T16:51:31.305Z",
            "__v": 0,
            "discountPrice": 9.74,
            "origin": "american",
            "maturation": "early",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484771/910fkzDygqL._AC_SL1500__s2nmte.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c29a481e16304cbbbd9b",
            "name": "seedra 4 spinaches - 305 seeds for planting outdoors and indoors home garden - seed variety pack - non gmo and heirloom - bloomsdale, new zealand, space, virofly",
            "currentPrice": 12.36,
            "categories": "vegetables-mix",
            "description": "SEEDRA Spinach Seeds Variety Pack contains 4 individual packets - Bloomsdale, New Zealand (Hot Weather), Space, Virofly. Free Tools - professional instructions, pH tester, 4 plant markers.",
            "currentRating": 4.5,
            "itemNo": "347920",
            "date": "2022-01-30T16:53:46.446Z",
            "__v": 0,
            "discountPrice": 9.36,
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484173/91VgieburoS._AC_SL1500__ulr9fy.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c1fc481e16304cbbbd7d",
            "name": "seedra 120 cucumber seeds for indoor and outdoor planting - home garden - gmo-free and heirloom seeds - 1 pack",
            "currentPrice": 10,
            "categories": "vegetables-mono",
            "description": "SEEDRA Cucumber - National Pickling - contains 120 seeds in 1 Pack and professional instructions",
            "currentRating": 4.5,
            "itemNo": "430513",
            "date": "2022-01-30T16:51:08.250Z",
            "__v": 0,
            "discountPrice": 7,
            "origin": "american",
            "maturation": "early",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484010/91xO0e74XMS._AC_SL1500__zbcp5i.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c1ce481e16304cbbbd74",
            "name": "seedra 300 okra seeds - clemson spineless seeds for indoor and outdoor planting - gmo-free and heirloom seeds - 1 pack",
            "currentPrice": 10,
            "categories": "vegetables-mono",
            "description": "SEEDRA Okra - Clemson Spineless - contains 300 seeds in 2 Packs and professional instructions",
            "currentRating": 4.5,
            "itemNo": "699319",
            "date": "2022-01-30T16:50:22.686Z",
            "__v": 0,
            "discountPrice": 7,
            "origin": "mexican",
            "maturation": "late",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484123/9125PQypA4S._AC_SL1500__ektwec.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c1ef481e16304cbbbd7a",
            "name": "seedra 70 corn seeds for indoor and outdoor planting - home garden - gmo-free and heirloom seeds - 1 pack",
            "currentPrice": 10,
            "categories": "vegetables-mono",
            "description": "SEEDRA Corn - Bodacious Hybrid - contains 70 seeds in 1 Pack and professional instructions",
            "currentRating": 4.5,
            "itemNo": "601020",
            "date": "2022-01-30T16:50:55.902Z",
            "__v": 0,
            "discountPrice": 7,
            "origin": "english",
            "maturation": "late",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484677/917pMh7kNML._AC_SL1500__mbdifs.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c274481e16304cbbbd95",
            "name": "seedra wildflower mix seeds for indoor and outdoor planting - 10 grams - heirloom seeds - 1 pack X",
            "currentPrice": 7.24,
            "categories": "flowers-mix",
            "description": "SEEDRA Wildflower Mix Seeds - contains 10 g in 1 Pack - a total of 25 easy-to-grow annual and perennial. The mix features 60% annual and 40% perennial wildflowers",
            "currentRating": 4.5,
            "itemNo": "219571",
            "date": "2022-01-30T16:53:08.823Z",
            "__v": 0,
            "discountPrice": 4.24,
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://cdn.shopify.com/s/files/1/0644/7815/0887/products/91GhccsjbvL._AC_SL1500.jpg?v=1652217460"
            ],
            "quantity": 12,
            "_id": "62a32568a347d54340cbd8bf",
            "name": "seedra parsley 1 pack",
            "description": "Parsley is not only one of the most widely grown herbs in market and home gardens but also one of the easiest and most useful. It can be tossed into almost any type of recipe or entree to improve the taste, plus parsley is an excellent garnish for any meat, poultry, vegetable, or cheese dish. Parsley Seeds - Dark Green Italian flat-leaf - contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George",
            "categories": "vegetables-mono",
            "currentPrice": 5.99,
            "discountPrice": 3.99,
            "packageDimensions": "3 x 6 x 2.3 inches",
            "currentRating": 2.3,
            "itemNo": "88817",
            "date": "2022-06-10T11:05:12.013Z",
            "__v": 0
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643483298/91O5BAUxY1L._AC_SL1500__pn6rq5.jpg"
            ],
            "quantity": 100,
            "_id": "629f946465cdbe3790bf493e",
            "name": "seedra 600 english lavender seeds for indoor and outdoor planting - 500mg - gmo-free and heirloom seeds - germination above 90% - 1 pack",
            "currentPrice": 5.89,
            "categories": "herbs-mono",
            "description": "SEEDRA English Lavender Seeds - contains 600 seeds in 1 Pack and professional instructions created by PhD Helga George",
            "currentRating": 4.5,
            "discountPrice": 2.89,
            "origin": "english",
            "maturation": "early",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ],
            "itemNo": "274203",
            "date": "2022-06-07T18:09:40.767Z",
            "__v": 0
        },
        {
            "enabled": true,
            "imageUrls": [
                "https://res.cloudinary.com/danbeavers/image/upload/v1643484039/91GhccsjbvL._AC_SL1500__knkdmd.jpg"
            ],
            "quantity": 100,
            "_id": "61f6c1df481e16304cbbbd77",
            "name": "seedra 300 parsley seeds for indoor and outdoor planting - dark green italian",
            "currentPrice": 4.99,
            "categories": "herbs-mono",
            "description": "SEEDRA Parsley Seeds - Dark Green Italian flat-leaf - contains 300 seeds in 1 Pack and professional instructions created by PhD Helga George",
            "currentRating": 4.5,
            "itemNo": "680201",
            "date": "2022-01-30T16:50:39.525Z",
            "__v": 0,
            "discountPrice": 1.99,
            "origin": "italian",
            "maturation": "early",
            "faq": [
                {
                    "question": "Can they be grown on hydraponic systems?",
                    "answer": "I have heat mats and artificial light. I planted them in all purpose of potting soil. Moist not wet. Placed them on heat mat. If not available, somewhere where it's 72 degrees. Add natural light, but i used artificial light."
                },
                {
                    "question": "For seller: are this seeds organic? It does matter if they are organic, seeds can hold pesticides from the plant they grow from.",
                    "answer": "Yes, this seeds 100% organic. Usually the don't hold any pesticides from the soil"
                }
            ]
        }
    ]

    // if (loading !== downloadRequestStates.SUCCESS) { 
    //     return <p>Loading</p> 
    // } if (Array.isArray(cart) && !cart.length) { 
    //     return ( 
    //         <p> No Products in Cart</p>  
    //     ) 
    // } 
    
   
    const cartList = cart.map(cartItem => { 
    const cartProduct = products.find(product => product._id === cartItem.id)
    console.log(cartProduct);
    if(!cartProduct) return null

    totalPrice += Number(cartItem.cartQuantity) * Number(cartProduct.currentPrice); 

     
     return <Box component="li" className={classes.cartItem} key={cartItem.id}>
        <ProductCard 
        product={{
            ...cartProduct,
            isBasket: true,
            cartQuantity: cartItem.cartQuantity
        }}
        loading={ loading }
        />
    </Box>
    })

    console.log(cartList);
   


    

    return (
        <>
            <Typography 
                className={classes.yourCartHeading}
                variant="h2"
                component="h2">
                Your cart.
            </Typography>
            <Box component="main" className={classes.cartContainer}> 
            <ul className={classes.cartList}> 
                {cartList}  
            </ul>   
            <Box className={classes.totalResultContainer}>
                <Typography
                className={classes.orderSummeryHeading}
                variant="h3"
                component="h3">
                    Order Summery

                </Typography>
                <Box className={classes.totalPrice}>
                    {totalPrice.toFixed(2)}
                </Box> 
            </Box>
        </Box> 
        
        </>
    )
       
}

Cart.propTypes = {
    loading: PropTypes.oneOf(Object.values(downloadRequestStates)).isRequired,
}

export default Cart;