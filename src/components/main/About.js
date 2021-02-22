import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import {IconButton} from "@material-ui/core";


export default function About() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>


            <IconButton edge="start" color="inherit" onClick={handleClickOpen}>
                <WbSunnyIcon fontSize="large"/>
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">{"About"}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        This is the about text
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Dismiss
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
