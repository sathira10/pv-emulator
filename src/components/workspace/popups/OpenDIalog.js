import { IconButton } from "@mui/material";
import { OpenInBrowser } from "@mui/icons-material";

export default function OpenDialog(props) {

    const setFieldValue = props.setFieldValue;
    return (
        <IconButton
            component="label"
            variant="outlined"
            color="primary">
            <OpenInBrowser fontSize="large" />
            <input type="file" accept=".json" onChange={
                async (e) => {
                    e.preventDefault()
                    const reader = new FileReader()
                    reader.onload = async (e) => {
                        const text = (e.target.result)
                        let module_data = JSON.parse(text);
                        console.log(module_data);
                        setFieldValue('isc', module_data.isc)
                        setFieldValue('voc', module_data.voc)
                        setFieldValue('imp', module_data.imp)
                        setFieldValue('vmp', module_data.vmp)
                        setFieldValue('n_ser', module_data.n_ser)
                        setFieldValue('alpha', module_data.alpha)
                        setFieldValue('beta', module_data.beta)
                        setFieldValue('c', 25)
                        setFieldValue('g', 1000)
                        setFieldValue('cell_type', module_data.cell_type)


                    };
                    reader.readAsText(e.target.files[0])
                }
            } hidden />
        </IconButton>
    )
}