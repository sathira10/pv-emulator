import {ThemeProvider} from '@material-ui/core'

import Nav from "./components/main/Nav";
import Workspace from "./components/main/Workspace";
import theme from './theme'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import './App.css';


function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Nav/>
                <Workspace/>
            </ThemeProvider>
        </>

    );
}

export default App;
