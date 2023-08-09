import { useState } from 'react';

import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@mui/material';
import { Save } from '@mui/icons-material';

export default function SaveDialog(props) {
    const [open, setOpen] = useState(false);
    let [panelName, setName] = useState('panel')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(panelName);
    };

    return (
        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <Save fontSize="large"/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Save</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        label="pv module name"
                        type="text"
                        onChange={handleNameChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={async () => {
                        await (props.update(props.values));
                        const data = JSON.stringify(props.get());
                        const blob = new Blob([data], {type: 'application/popups;charset=utf-8'});
                        const dataURL = window.URL.createObjectURL(blob);
                        let tempLink = document.createElement('a');
                        tempLink.href = dataURL;
                        tempLink.download = `${panelName}.json`;
                        tempLink.click();
                        setName("panel");
                        setOpen(false)
                    }} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
