import {Box, Button, Grid, IconButton} from "@material-ui/core";
import TuneIcon from '@material-ui/icons/Tune';
import SerialDialog from "./popups/SerialDialog";
import React from "react";

export default function Emulate(props) {
    return (
        <Box pt={2}>
            <Grid
                container
                direction="row"
                justify="right"
                className="content"
            >
                <div>
                    <SerialDialog getSerial={props.getSerial} setSerial={props.setSerial}/>
                    <Button
                        variant="contained"
                        color="secondary">
                        Emulate
                    </Button>
                </div>
            </Grid>
        </Box>

    )
}