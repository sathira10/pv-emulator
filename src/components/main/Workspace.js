import React from "react";
import {Box, Paper} from "@material-ui/core";

import Datasheet from "../workspace/Datasheet";
import Results from "../workspace/Results";
import Images from "../workspace/Images";
import Emulate from "../workspace/Emulate";

class Workspace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                Isc: '',
                Voc: '',
                Imp: '',
                Vmp: '',
                alpha: '',
                beta: '',
                N: '',
                C: '',
                G: '',
                cell_type: '',
            },
            parameters: {
                Iph: '23',
                Io: '7e-10',
                Rs: '',
                Rsh: '',
                A: '',
            },
            images: {
                iv_curve: process.env.PUBLIC_URL + '/default_img.png',
                pv_curve: process.env.PUBLIC_URL + '/default_img.png',
            },
            serial: {
                port: "COM4",
                connected: false
            }
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

    get_data = () => {
        return (this.state.data);
    }


    render() {
        return (
            <div className="container-fluid mb-5" style={{width: "90%"}}>
                <div className="row d-flex">
                    <div className="col-lg-5 justify-content-center">
                        <Box pt={4}>
                            <Paper display="flex" elevation={4}>
                                <Box p={3}>
                                    <Datasheet update={this.update_data} get={this.get_data}/>
                                </Box>
                            </Paper>
                        </Box>
                    </div>
                    <div className="col-lg-7">
                        <Box pt={4}>

                            <Box>
                                <Images iv={this.state.iv_curve} pv={this.state.pv_curve}/>
                            </Box>
                            <Box>
                                <Results/>
                            </Box>
                            <Box>
                                <Emulate getSerial={this.getSerial} setSerial={this.setSerial}/>
                            </Box>

                        </Box>

                    </div>
                </div>
            </div>
        )

    }
}

export default Workspace;