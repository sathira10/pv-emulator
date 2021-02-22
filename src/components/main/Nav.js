import React from "react";
import {Link} from 'react-router-dom'

import {AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import {makeStyles, Tooltip} from "@material-ui/core";

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import InputIcon from '@material-ui/icons/Input';


import About from "./About";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Nav() {
    const classes = useStyles();
    return (
        <AppBar position="static" className="Nav">
            <Toolbar>



                <About/>

                <Typography variant="h5" className={classes.title}>
                    CONTROL PANEL
                </Typography>
            </Toolbar>
        </AppBar>
    )
}