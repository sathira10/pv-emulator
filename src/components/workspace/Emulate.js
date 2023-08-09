import { Box, Button, Grid } from "@mui/material";
import SerialDialog from "./popups/SerialDialog";

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
                    <SerialDialog serial={props.serial} setSerial={props.setSerial} restartSerial={props.restartSerial} />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={props.hardwareEmulate}>
                        Emulate
                    </Button>
                </div>
            </Grid>
        </Box>

    )
}