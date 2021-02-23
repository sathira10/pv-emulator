import React from 'react';
import {CardContent, Typography, Card, makeStyles, Box, Button, Grid, ButtonGroup} from "@material-ui/core";


// useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
// });


export default function Results(props) {

    // const  classes = useStyles();

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <Box pt={3} bp={3}>
                        <CustomCard
                            name={<span>I<sub>ph</sub></span>}
                            value={props.params.iph}
                            description="Photo current (A)"/>
                    </Box>
                </div>

                <div className="col-md-4">
                    <Box pt={3} bp={3}>
                        <CustomCard
                            name={<span>I<sub>o</sub></span>}
                            value={props.params.io}
                            description="Saturation current (A)"/>
                    </Box>
                </div>

                <div className="col-md-4">
                    <Box pt={3} bp={3}>
                        <CustomCard
                            name="A"
                            value={props.params.a}
                            description="Diode ideality factor"/>
                    </Box>
                </div>

                <div className="col-md-4">
                    <Box pt={3} bp={3}>
                        <CustomCard
                            name={<span>R<sub>sh</sub></span>}
                            value={props.params.rs}
                            description={<span>Series resistance{<span> (&Omega;)</span>}</span>}/>
                    </Box>
                </div>

                <div className="col-md-4">
                    <Box pt={3} bp={3}>
                        <CustomCard
                            name={<span>R<sub>s</sub></span>}
                            value={props.params.rsh}
                            description={<span>Shunt resistance{<span> (&Omega;)</span>}</span>}/>
                    </Box>
                </div>

                {/*<div className="col-md-4">*/}
                {/*    <Box pt={3} bp={3}>*/}
                {/*        <CustomCard*/}
                {/*            name={<span>V<sub>th</sub></span>}*/}
                {/*            value="0"*/}
                {/*            unit=""*/}
                {/*            description="Thermal voltage (mV)"/>*/}
                {/*    </Box>*/}
                {/*</div>*/}


            </div>


        </>

    )

}


function CustomCard(props) {
    return (
        <Card>


            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="h5" component="h2" className="force-select">
                    {props.value}
                </Typography>
                <Typography color="textSecondary">
                    {props.description}
                </Typography>
                <Typography variant="body2" component="p">

                </Typography>
            </CardContent>

        </Card>
    )
}
