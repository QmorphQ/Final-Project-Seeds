import React from 'react';
import { Box, Typography, Grid, MobileStepper, Paper, Button, CardHeader, Avatar, CardContent, Rating, Card } from '@mui/material';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { red } from '@mui/material/colors';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



const tutorialSteps = [

    {
        title: 'Carla Samantoes-Diego1',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/22815144_1145347618931927_6894020285888549502_n.png?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0mS9j0EV2NsAX-xZkbF&_nc_ht=scontent.fiev22-1.fna&oh=00_AT_PQxs58vvT4Q1FRX8rjpRzO_DudW-wJcsefAigwjaynQ&oe=621CF28F',

    },
    {
        title: 'Carla Samantoes-Diego2',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.18169-9/11041829_10153068245437488_7386101411081392774_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=v1q2DzuomJoAX8iOn3S&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8MwJdFZgYsljg8uljKa87K3mJXgkiuQKyje3OHLXbMtQ&oe=621EC9C6',
    },
    {
        title: 'Carla Samantoes-Diego3',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: ' ',
    },
    {
        title: 'Carla Samantoes-Diego4',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Carla Samantoes-Diego5',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://scontent.fiev22-2.fna.fbcdn.net/v/t1.6435-9/33816489_2185230141493172_5586030908944678912_n.png?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JViuzccMuosAX9cQY-e&_nc_ht=scontent.fiev22-2.fna&oh=00_AT9mVJhEvt1Rd101K_0Kr6-qbiAXkRqj1ydfJW7fZad5VA&oe=621FC5DC',
    },
    {
        title: 'Carla Samantoes-Diego6',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        title: 'Carla Samantoes-Diego7',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.6435-9/84621804_889691094793888_1280812689945264128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AsIS0GxOGcAX8-sXgG&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8dS-c_0OcsJ1MpxdiMF-dcMraDCOLqMOUWob7fnnWs7g&oe=621DAF5D',
    },
    {
        title: 'Carla Samantoes-Diego8',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.6435-9/84621804_889691094793888_1280812689945264128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AsIS0GxOGcAX8-sXgG&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8dS-c_0OcsJ1MpxdiMF-dcMraDCOLqMOUWob7fnnWs7g&oe=621DAF5D',
    },
    {
        title: 'Carla Samantoes-Diego9',
        subheader: '12.09.2021',
        text: 'SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George\n' +
            'Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.',
        imgPath: 'https://scontent.fiev22-1.fna.fbcdn.net/v/t1.6435-9/84621804_889691094793888_1280812689945264128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_AsIS0GxOGcAX8-sXgG&_nc_ht=scontent.fiev22-1.fna&oh=00_AT8dS-c_0OcsJ1MpxdiMF-dcMraDCOLqMOUWob7fnnWs7g&oe=621DAF5D',
    },
];


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1250,
        position:"relative",
        margin: "0 auto",
        paddingBottom: "50px"
    },
    header: {
        display: 'flex',
        alignItems: 'center',
    },
}));


function TextComments() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
    let nxsteps;
    let presteps;
    if (activeStep === 0) {
        presteps = (maxSteps-1);
    }else {
        presteps = (activeStep - 1);
    }
    if (activeStep === (maxSteps-2)) {
        nxsteps = (activeStep + 1);
    }else if (activeStep === (maxSteps-1)) {
        nxsteps = 0;
    }else {
        nxsteps = (activeStep + 1);
    }

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <div>
                <Box mx="auto" pb={15} pt={7} textAlign="center">
                    <Typography variant="h2" as="div">What out clients say</Typography>
                </Box>
            </div>


            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label} >
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4} zeroMinWidth display={{xs: "none", sm: "block", md: "block"}} mt={4}>
                                    <Card sx={{maxWidth: 500, borderRadius: "12px"}}>
                                        <Paper square elevation={0} className={classes.header}>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{bgcolor: red[500]}} aria-label="recipe"
                                                            src={tutorialSteps[presteps].imgPath}/>
                                                }
                                                sx={{color: 'text.disabled'}}
                                                title={tutorialSteps[presteps].title}
                                                subheader={tutorialSteps[presteps].subheader}
                                            />
                                        </Paper>
                                        <Box pl={2}>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly/>
                                        </Box>
                                        <CardContent>
                                            <Typography variant="body2" color="text.disabled">
                                                {tutorialSteps[presteps].text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4} zeroMinWidth>
                                    <Card sx={{maxWidth: 500, borderRadius: "12px"}}>
                                        <Box>
                                            <Paper square elevation={0} className={classes.header}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe"
                                                                src={tutorialSteps[activeStep].imgPath}/>
                                                    }
                                                    sx={{color: 'text.primary'}}
                                                    title={tutorialSteps[activeStep].title}
                                                    subheader={tutorialSteps[activeStep].subheader}
                                                />
                                            </Paper>
                                            <Box pl={2}>
                                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly/>
                                            </Box>
                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    {tutorialSteps[activeStep].text}
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
                                                            src={tutorialSteps[nxsteps].imgPath}/>
                                                }
                                                sx={{color: 'text.disabled'}}
                                                title={tutorialSteps[nxsteps].title}
                                                subheader={tutorialSteps[nxsteps].subheader}
                                            />
                                        </Paper>
                                        <Box pl={2}>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.1} readOnly/>
                                        </Box>
                                        <CardContent>
                                            <Typography variant="body2" color="text.disabled">
                                                {tutorialSteps[nxsteps].text}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button>

                    </Button>
                }
                backButton={
                    <Button>

                    </Button>
                }
            />
        </div>
    );
}
export default TextComments;