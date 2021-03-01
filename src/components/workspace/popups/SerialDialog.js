import TuneIcon from "@material-ui/icons/Tune";
import {FormControl, IconButton, InputLabel, MenuItem, Select} from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SerialDialog(props) {
    const [open, setOpen] = React.useState(false);

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
                <TuneIcon fontSize="large"/>
            </IconButton>
            <Dialog
                fullWidth
                maxWidth="xs"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Serial Settings"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <FormControl style={{minWidth: 120}}>
                            <InputLabel id="demo-simple-select-label">Select Port</InputLabel>
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
                    <Button onClick={handleConnect} color="primary" autoFocus startIcon={<KeyboardArrowRightIcon/>}>
                        Connect
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}