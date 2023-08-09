import { useState } from "react";

import {Tune, KeyboardArrowRight} from "@mui/icons-material";
import {FormControl, IconButton, InputLabel, MenuItem, Select, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export default function SerialDialog(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConnect = () => {
        props.restartSerial()
        handleClose()
    }


    return (
        <>
            <IconButton variant="outlined" color="secondary" onClick={handleClickOpen}>
                <Tune fontSize="large"/>
            </IconButton>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Select Serial Port"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <FormControl style={{minWidth: 120}}>
                            {/* <InputLabel id="demo-simple-select-label">Select Port</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={props.serial}
                                onChange={(event) => props.setSerial(event.target.value)}
                            >
                                <MenuItem value="COM1">COM1</MenuItem>
                                <MenuItem value="COM2">COM2</MenuItem>
                                <MenuItem value="COM3">COM3</MenuItem>
                                <MenuItem value="COM4">COM4</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConnect} color="primary" autoFocus startIcon={<KeyboardArrowRight/>}>
                        Connect
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}