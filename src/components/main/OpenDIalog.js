import {ButtonGroup, IconButton} from "@material-ui/core";
import {OpenInBrowser} from "@material-ui/icons";
import React from "react";

export default function OpenDialog(props){

    const setFieldValue = props.setFieldValue;
    return(
        <IconButton
            component="label"
            variant="outlined"
            color="primary">
            <OpenInBrowser/>
            <input type="file" accept=".json" onChange={
                async (e) => {
                    e.preventDefault()
                    const reader = new FileReader()
                    reader.onload = async (e) => {
                        const text = (e.target.result)
                        let module_data = JSON.parse(text);
                        console.log(module_data);
                        setFieldValue('Voc', module_data.Voc)
                        setFieldValue('Isc', module_data.Voc)
                        setFieldValue('Voc', module_data.Isc)
                        setFieldValue('Imp', module_data.Imp)
                        setFieldValue('Vmp', module_data.Vmp)
                        setFieldValue('N', module_data.N)
                        setFieldValue('alpha', module_data.alpha)
                        setFieldValue('beta', module_data.beta)
                        setFieldValue('C', 25)
                        setFieldValue('G', 1000)
                        setFieldValue('cell_type', module_data.cell_type)


                    };
                    reader.readAsText(e.target.files[0])
                }
            } hidden/>
        </IconButton>
    )
}