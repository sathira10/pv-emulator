import axios from "axios";
import { Box, FormControl, Typography, Button, MenuItem, Grid, ButtonGroup } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import SaveDialog from "./popups/SaveDialog";
import OpenDialog from "./popups/OpenDIalog";


function ModuleData(props) {

    const update = props.update
    const get = props.get
    const setParams = props.setParams

    const handleSubmit = event => {
        event.preventDefault();

    }

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            let module_data = JSON.parse(text);
            console.log(module_data);

        };
        reader.readAsText(e.target.files[0])
    }

    const ranges = [
        {
            value: 'monoSi',
            label: 'Mono crystalline Silicon',
        },
        {
            value: 'multiSi/polySi',
            label: 'Multi crystalline Silicon',
        }
    ];


    // const saveData = () => {
    //     update(ref.current.values);
    //     const data = JSON.stringify(get());
    //     console.log(data)
    //


    // }
    return (

        <FormControl>

            <Typography variant="h5">Photovoltaic Module Data</Typography>

            <Formik

                enableReinitialize={true}
                initialValues={{
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
                }}

                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        update(values);

                        let formData = new FormData();
                        formData.append("isc", get().isc)
                        formData.append("voc", get().voc)
                        formData.append("imp", get().imp)
                        formData.append("vmp", get().vmp)
                        formData.append("n_ser", get().n_ser)
                        formData.append("alpha", get().alpha)
                        formData.append("beta", get().beta)
                        formData.append("c", get().c)
                        formData.append("g", get().g)
                        formData.append("cell_type", get().cell_type)

                        axios.post("http://127.0.0.1:5000/api/param_ext", formData)
                            .then(response => setParams(response.data))
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, setFieldValue, values }) => (
                    <div>
                        <Grid justify="center" alignItems="center">
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item>


                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="isc"
                                                type="number"
                                                label={<span>I<sub>sc</sub></span>}
                                                helperText="Short circuit current (Amps)"
                                            />
                                        </Box>
                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="voc"
                                                type="number"
                                                label={<span>V<sub>oc</sub></span>}
                                                helperText="Open circuit voltage (Volts)"
                                            />
                                        </Box>


                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="imp"
                                                type="number"
                                                label={<span>I<sub>mp</sub></span>}
                                                helperText="Max power point current (Amps)"
                                            />
                                        </Box>
                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="vmp"
                                                type="number"
                                                label={<span>V<sub>mp</sub></span>}
                                                helperText="Max power point voltage (Volts)"
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="n_ser"
                                                type="number"
                                                label="N"
                                                helperText="Number of cells in series"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item>
                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="alpha"
                                                type="number"
                                                label={<span>&alpha;</span>}
                                                helperText={<span>Temp coef of Isc (Amps/&deg;C)</span>}
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="beta"
                                                type="number"
                                                label={<span>&beta;</span>}
                                                helperText={<span>Temp coef of Voc (Volts/&deg;C)</span>}
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="c"
                                                type="number"
                                                label="T"
                                                helperText={<span>Temperature (&deg;C)</span>}
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name="g"
                                                type="number"
                                                label="G"
                                                helperText={<span>Irradiance level (Watts/m<sup>2</sup>)</span>}
                                            />
                                        </Box>


                                        <Box margin={1}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                type="text"
                                                name="cell_type"
                                                select
                                                variant="standard"
                                                helperText="Select material"
                                                margin="normal"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            >
                                                {ranges.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Field>
                                        </Box>

                                    </Grid>
                                </Grid>


                            </Form>


                        </Grid>

                        <Box pt={2}>
                            <Grid

                                direction="row"
                                justify="space-between"
                                className="content"
                            >
                                <ButtonGroup >

                                    <OpenDialog
                                        setFieldValue={setFieldValue}>
                                    </OpenDialog>

                                    <SaveDialog
                                        values={values}
                                        update={update}
                                        get={get}>
                                    </SaveDialog>


                                </ButtonGroup>

                                <ButtonGroup >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Calculate
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Box>

                    </div>
                )}
            </Formik>
        </FormControl>
    )

}

export default ModuleData;
