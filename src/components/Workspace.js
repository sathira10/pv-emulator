import React, { useState } from "react";
import { Box, Paper } from "@mui/material";

import Datasheet from "./workspace/Datasheet";
import Results from "./workspace/Results";
import Images from "./workspace/Images";
import Emulate from "./workspace/Emulate";

const Workspace = () => {

    const [data, setData] = useState({
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
    });

    const [parameters, setParameters] = useState({
        iph: '0',
        io: '0',
        rs: '0',
        rsh: '0',
        a: '0',
    });

    const [images, setImages] = useState({
        iv_curve: '/default_img.png',
        pv_curve: '/default_img.png'
    });

    const [serial, setSerial] = useState("COM4");

    const update_data = (newData) => {
        setData(newData);
    }

    const update_params = (params) => {
        setParameters(params);
        setImages({
            iv_curve: "http://127.0.0.1:5000/static/" + params.iv,
            pv_curve: "http://127.0.0.1:5000/static/" + params.pv
        });
    }

    const restart_serial = () => {
        console.log("RESTART");
        //restart serial
    }

    const hardware_emulate = () => {
        console.log("EMULATE");
        //emulate
    }

    return (
        <div className="container-fluid mb-2" style={{ width: "90%" }}>
            <div className="row d-flex">
                <div className="col-lg-5 justify-content-center">
                    <Box pt={4}>
                        <Paper display="flex" elevation={4}>
                            <Box p={3}>
                                <Datasheet update={setData} get={() => data}
                                    setParams={update_params} />
                            </Box>
                        </Paper>
                    </Box>
                </div>
                <div className="col-lg-7">
                    <Box pt={4}>
                        <Box>
                            <Images iv={images.iv_curve} pv={images.pv_curve} />
                        </Box>
                        <Box>
                            <Results params={parameters} />
                        </Box>
                        <Box>
                            <Emulate
                                serial={serial}
                                setSerial={setSerial}
                                restartSerial={restart_serial}
                                hardwareEmulate={hardware_emulate} />
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default Workspace;
