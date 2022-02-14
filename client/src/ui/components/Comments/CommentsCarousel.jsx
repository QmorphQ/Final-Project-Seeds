import Carousel from "react-material-ui-carousel";
import { Box, Typography, Grid, Paper, CardHeader, Avatar, CardContent, Rating, Card } from '@mui/material';
import {red} from "@mui/material/colors";
import { makeStyles } from '@material-ui/core/styles';

const items = [
    {
        title1: "Carla Samantoes-Diego8",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/17191265_1801408910176329_8650200761920899239_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sYCSb0NBblkAX-qZa0z&_nc_ht=scontent.fiev22-1.fna&oh=00_AT-AseLANCO89EJziK1dKWgz-y0OjASQbN1VlQMnxWTwfw&oe=623058C4",
        title: "Carla Samantoes-Diego1",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/22815144_1145347618931927_6894020285888549502_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0mS9j0EV2NsAX-xZkbF&_nc_ht=scontent.fiev22-1.fna&oh=00_AT_PQxs58vvT4Q1FRX8rjpRzO_DudW-wJcsefAigwjaynQ&oe=621CF28F",
        title2: "Carla Samantoes-Diego2",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/11041829_10153068245437488_7386101411081392774_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v1q2DzuomJoAX8iOn3S&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8MwJdFZgYsljg8uljKa87K3mJXgkiuQKyje3OHLXbMtQ&oe=621EC9C6",
    },
    {
        title1: "Carla Samantoes-Diego1",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/22815144_1145347618931927_6894020285888549502_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0mS9j0EV2NsAX-xZkbF&_nc_ht=scontent.fiev22-1.fna&oh=00_AT_PQxs58vvT4Q1FRX8rjpRzO_DudW-wJcsefAigwjaynQ&oe=621CF28F",
        title: "Carla Samantoes-Diego2",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/11041829_10153068245437488_7386101411081392774_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v1q2DzuomJoAX8iOn3S&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8MwJdFZgYsljg8uljKa87K3mJXgkiuQKyje3OHLXbMtQ&oe=621EC9C6",
        title2: "Carla Samantoes-Diego3",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: " ",
    },
    {
        title1: "Carla Samantoes-Diego2",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/11041829_10153068245437488_7386101411081392774_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v1q2DzuomJoAX8iOn3S&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8MwJdFZgYsljg8uljKa87K3mJXgkiuQKyje3OHLXbMtQ&oe=621EC9C6",
        title: "Carla Samantoes-Diego3",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: " ",
        title2: "Carla Samantoes-Diego4",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            '"B"e sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath2: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
        title1: "Carla Samantoes-Diego3",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: " ",
        title: "Carla Samantoes-Diego4",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            '"B"e sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
        title2: "Carla Samantoes-Diego5",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: "https://scontent.fiev22-2.fna.fbcdn.net/v/t1.6435-9/33816489_2185230141493172_5586030908944678912_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JViuzccMuosAX9cQY-e&_nc_ht=scontent.fiev22-2.fna&oh=00_AT9mVJhEvt1Rd101K_0Kr6-qbiAXkRqj1ydfJW7fZad5VA&oe=621FC5DC",
    },
    {
        title1: "Carla Samantoes-Diego4",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            '"B"e sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath1: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
        title: "Carla Samantoes-Diego5",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: "https://scontent.fiev22-2.fna.fbcdn.net/v/t1.6435-9/33816489_2185230141493172_5586030908944678912_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JViuzccMuosAX9cQY-e&_nc_ht=scontent.fiev22-2.fna&oh=00_AT9mVJhEvt1Rd101K_0Kr6-qbiAXkRqj1ydfJW7fZad5VA&oe=621FC5DC",
        title2: "Carla Samantoes-Diego6",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: "https://storge.pic2.me/c/1360x800/892/587bce9c27adb.jpg",
    },
    {
        title1: "Carla Samantoes-Diego5",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: "https://scontent.fiev22-2.fna.fbcdn.net/v/t1.6435-9/33816489_2185230141493172_5586030908944678912_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JViuzccMuosAX9cQY-e&_nc_ht=scontent.fiev22-2.fna&oh=00_AT9mVJhEvt1Rd101K_0Kr6-qbiAXkRqj1ydfJW7fZad5VA&oe=621FC5DC",
        title: "Carla Samantoes-Diego6",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: "https://storge.pic2.me/c/1360x800/892/587bce9c27adb.jpg",
        title2: "Carla Samantoes-Diego7",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.6435-9/84621804_889691094793888_1280812689945264128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AsIS0GxOGcAX8-sXgG&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8dS-c_0OcsJ1MpxdiMF-dcMraDCOLqMOUWob7fnnWs7g&oe=621DAF5D",

    },
    {
        title1: "Carla Samantoes-Diego6",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: "https://storge.pic2.me/c/1360x800/892/587bce9c27adb.jpg",
        title: "Carla Samantoes-Diego7",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.6435-9/84621804_889691094793888_1280812689945264128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AsIS0GxOGcAX8-sXgG&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8dS-c_0OcsJ1MpxdiMF-dcMraDCOLqMOUWob7fnnWs7g&oe=621DAF5D",
        title2: "Carla Samantoes-Diego8",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/17191265_1801408910176329_8650200761920899239_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sYCSb0NBblkAX-qZa0z&_nc_ht=scontent.fiev22-1.fna&oh=00_AT-AseLANCO89EJziK1dKWgz-y0OjASQbN1VlQMnxWTwfw&oe=623058C4",
    },
    {
        title1: "Carla Samantoes-Diego7",
        subheader1: "12.09.2021",
        text1: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath1: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.6435-9/84621804_889691094793888_1280812689945264128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AsIS0GxOGcAX8-sXgG&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8dS-c_0OcsJ1MpxdiMF-dcMraDCOLqMOUWob7fnnWs7g&oe=621DAF5D",
        title: "Carla Samantoes-Diego8",
        subheader: "12.09.2021",
        text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/17191265_1801408910176329_8650200761920899239_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sYCSb0NBblkAX-qZa0z&_nc_ht=scontent.fiev22-1.fna&oh=00_AT-AseLANCO89EJziK1dKWgz-y0OjASQbN1VlQMnxWTwfw&oe=623058C4",
        title2: "Carla Samantoes-Diego1",
        subheader2: "12.09.2021",
        text2: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n" +
            "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.",
        imgPath2: "https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/22815144_1145347618931927_6894020285888549502_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0mS9j0EV2NsAX-xZkbF&_nc_ht=scontent.fiev22-1.fna&oh=00_AT_PQxs58vvT4Q1FRX8rjpRzO_DudW-wJcsefAigwjaynQ&oe=621CF28F",
    },
];
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1250,
        position:"relative",
        margin: "0 auto",
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
    }));

function Comments() {
    return (
        <div>
            <div>
                <Box mx="auto" pb={15} pt={7} textAlign="center">
                    <Typography variant="h2" as="div">What out clients say</Typography>
                </Box>
            </div>
            <Carousel
                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#359740'
                    }
                }}
                indicatorContainerProps={{
                    style: {
                       paddingBottom: '15px'
                    }
                }}
                m={"auto"}
                navButtonsAlwaysInvisible={true}
                interval="3000"
                animation="Slide"
                autoPlay={true}
                swipe={true}
            >
                {items.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
            </Carousel>

        </div>
    );
}
function Item(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} pb={2}>
                <Grid item xs={12} sm={5} md={4} zeroMinWidth display={{xs: "none", sm: "block", md: "block"}} mt={4}>
                    <Card sx={{maxWidth: 500, borderRadius: "12px"}}>
                        <Paper square elevation={0} className={classes.header}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe"
                                        /* eslint-disable-next-line no-undef,react/prop-types */
                                            src={props.item.imgPath1}/>
                                }
                                sx={{color: 'text.disabled'}}
                                /* eslint-disable-next-line no-undef,react/prop-types */
                                title={props.item.title1}
                                /* eslint-disable-next-line no-undef,react/prop-types */
                                subheader={props.item.subheader1}
                            />
                        </Paper>
                        <Box pl={2}>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly/>
                        </Box>
                        <CardContent>
                            <Typography variant="body2" color="text.disabled">
                                {/* eslint-disable-next-line react/prop-types */}
                                {props.item.text1}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={7} md={4} zeroMinWidth>
                    <Card sx={{maxWidth: 500, borderRadius: "12px"}}>
                        <Box>
                            <Paper square elevation={0} className={classes.header}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe"
                                                /* eslint-disable-next-line react/prop-types */
                                                src={props.item.imgPath}/>
                                    }
                                    sx={{color: 'text.primary'}}
                                    /* eslint-disable-next-line react/prop-types */
                                    title={props.item.title}
                                    /* eslint-disable-next-line react/prop-types */
                                    subheader={props.item.subheader}
                                />
                            </Paper>
                            <Box pl={2}>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly/>
                            </Box>
                            <CardContent>
                                <Typography variant="body2" color="text.primary">
                                    {/* eslint-disable-next-line react/prop-types */}
                                    {props.item.text}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}
                      mt={4}
                      zeroMinWidth
                      display={{xs: "none", sm: "none", md: "block"}}>
                    <Card sx={{maxWidth: 540, borderRadius: "12px"}} >
                        <Paper square elevation={0} className={classes.header}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe"
                                        /* eslint-disable-next-line react/prop-types */
                                            src={props.item.imgPath2}/>
                                }
                                sx={{color: 'text.disabled'}}
                                /* eslint-disable-next-line react/prop-types */
                                title={props.item.title2}
                                /* eslint-disable-next-line react/prop-types */
                                subheader={props.item.subheader2}
                            />
                        </Paper>
                        <Box pl={2}>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly/>
                        </Box>
                        <CardContent>
                            <Typography variant="body2" color="text.disabled">
                                {/* eslint-disable-next-line react/prop-types */}
                                {props.item.text2}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>

);
}

export default Comments;
