import React from "react";
import { Box, Paper } from "@mui/material";

import Datasheet from "./workspace/Datasheet";
import Results from "./workspace/Results";
import Images from "./workspace/Images";
import Emulate from "./workspace/Emulate";

class Workspace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                isc: '',
                voc: '',
                imp: '',
                vmp: '',
                alpha: '',
                beta: '',
                n_ser: '',
                c: '',
                g: '',
                cell_type: '',
            },
            parameters: {
                iph: '0',
                io: '0',
                rs: '0',
                rsh: '0',
                a: '0',
            },
            images: {
                iv_curve: process.env.PUBLIC_URL + '/default_img.png',
                pv_curve: process.env.PUBLIC_URL + '/default_img.png'
            },
            serial: "COM4"
        }

    }

    getSerial = () => {
        return (this.state.serial)
    }

    setSerial = (serData) => {
        this.setState({serial: serData});
    }

    update_data = (data) => {
        this.setState({data: data})
    }

    update_params = (params) => {
        this.setState({parameters: params})
        this.setState({
            images: {
                iv_curve: "http://127.0.0.1:5000/static/"+this.state.parameters.iv,
                pv_curve: "http://127.0.0.1:5000/static/"+this.state.parameters.pv
            }
        })

    }

    get_data = () => {
        return (this.state.data);
    }

    restart_serial = () => {
        console.log("RESTART")
        //restart serial
    }

    hardware_emulate = () => {
        console.log("EMULATE")
        //emulate
    }


    render() {
        return (
            <div className="container-fluid mb-2" style={{width: "90%"}}>
                <div className="row d-flex">
                    <div className="col-lg-5 justify-content-center">
                        <Box pt={4}>
                            <Paper display="flex" elevation={4}>
                                <Box p={3}>
                                    <Datasheet update={this.update_data} get={this.get_data}
                                               setParams={this.update_params}/>
                                </Box>
                            </Paper>
                        </Box>
                    </div>
                    <div className="col-lg-7">
                        <Box pt={4}>

                            <Box>
                                <Images iv={this.state.images.iv_curve} pv={this.state.images.pv_curve}/>
                            </Box>
                            <Box>
                                <Results params={this.state.parameters}/>
                            </Box>
                            <Box>
                                <Emulate
                                    serial={this.state.serial}
                                    setSerial={this.setSerial}
                                    restartSerial={this.restart_serial}
                                    hardwareEmulate={this.hardware_emulate}/>
                            </Box>

                        </Box>

                    </div>
                </div>
            </div>
        )

    }
}

export default Workspace;