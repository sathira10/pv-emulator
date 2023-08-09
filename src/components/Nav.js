import { AppBar, Toolbar, Typography } from "@mui/material";
import About from "./About";

export default function Nav() {
    return (
        <AppBar position="static" sx={{ flexGrow: 1 }} className="Nav">
            <Toolbar>
                <About sx={{ marginRight: 2 }} />

                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    CONTROL PANEL
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
