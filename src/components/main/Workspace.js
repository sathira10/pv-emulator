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

    update_params = (params) => {
        this.setState({parameters: params})
    }

    get_data = () => {
        return (this.state.data);
    }


    render() {
        return (
            <div className="container-fluid mb-2" style={{width: "90%"}}>
                <div className="row d-flex">
                    <div className="col-lg-5 justify-content-center">
                        <Box pt={4}>
                            <Paper display="flex" elevation={4}>
                                <Box p={3}>
                                    <Datasheet update={this.update_data} get={this.get_data} setParams={this.update_params}/>
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
                                <Results params={this.state.parameters}/>
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