import {AppBar, Toolbar, Typography} from "@material-ui/core";
import About from "./About";

export default function Nav(){
return(
    <AppBar position="static" className="Nav">
        <Toolbar>
            <About/>
            <Typography variant="h5">
                CONTROL PANEL
            </Typography>
        </Toolbar>
    </AppBar>
)
}