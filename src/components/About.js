import { useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { WbSunny } from '@mui/icons-material';

export default function About() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>


            <IconButton edge="start" color="inherit" onClick={handleClickOpen}>
                <WbSunny fontSize="large" />
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
