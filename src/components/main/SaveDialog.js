import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Save} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";


export default function SaveDialog(props) {
    const [open, setOpen] = React.useState(false);
    let [panelName, setName] = React.useState('panel')

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
                <Save/>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        label="Panel name"
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
                        const blob = new Blob([data], {type: 'application/json;charset=utf-8'});
                        const dataURL = window.URL.createObjectURL(blob);
                        let tempLink = document.createElement('a');
                        tempLink.href = dataURL;
                        tempLink.download = panelName;
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
