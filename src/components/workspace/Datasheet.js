import {Box, FormControl, Typography, Button, MenuItem, Grid, ButtonGroup} from "@material-ui/core";
import {Formik, Form, Field} from 'formik';
import {TextField} from 'formik-material-ui';
import SaveDialog from "./popups/SaveDialog";
import OpenDialog from "./popups/OpenDIalog";


function ModuleData(props) {

    const update = props.update
    const get = props.get

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
            value: 0,
            label: 'Mono crystalline Silicon',
        },
        {
            value: 1,
            label: 'Multi crystalline Silicon',
        },
        {
            value: 2,
            label: 'Thin film',
        },
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
                }}

                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        update(values);
                    }, 500);
                }}
            >
                {({submitForm, isSubmitting, setFieldValue, values}) => (
                    <div>
                        <Grid justify="center" alignItems="center">
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item>


                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="Isc"
                                                type="number"
                                                label={<span>I<sub>sc</sub></span>}
                                                helperText="Short circuit current (Amps)"
                                            />
                                        </Box>
                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="Voc"
                                                type="number"
                                                label={<span>V<sub>oc</sub></span>}
                                                helperText="Open circuit voltage (Volts)"
                                            />
                                        </Box>


                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="Imp"
                                                type="number"
                                                label={<span>I<sub>mp</sub></span>}
                                                helperText="Max power point current (Amps)"
                                            />
                                        </Box>
                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="Vmp"
                                                type="number"
                                                label={<span>V<sub>mp</sub></span>}
                                                helperText="Max power point voltage (Volts)"
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="N"
                                                type="number"
                                                label="N"
                                                helperText="Number of cells in series"
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item>
                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="alpha"
                                                type="number"
                                                label={<span>&alpha;</span>}
                                                helperText={<span>Temp coef of Isc (Amps/&deg;C)</span>}
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="beta"
                                                type="number"
                                                label={<span>&beta;</span>}
                                                helperText={<span>Temp coef of Voc (Volts/&deg;C)</span>}
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="C"
                                                type="number"
                                                label="T"
                                                helperText={<span>Temperature (&deg;C)</span>}
                                            />
                                        </Box>

                                        <Box margin={1}>
                                            <Field
                                                component={TextField}
                                                name="G"
                                                type="number"
                                                label="G"
                                                helperText={<span>Irradiance level (Watts/m<sup>2</sup>)</span>}
                                            />
                                        </Box>


                                        <Box margin={1}>
                                            <Field
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
                                container
                                direction="row"
                                justify="space-between"
                                className="content"
                            >
                                <ButtonGroup variant="outlined" color="primary">

                                    <OpenDialog
                                        setFieldValue={setFieldValue}>
                                    </OpenDialog>

                                    <SaveDialog
                                        values={values}
                                        update={update}
                                        get={get}>
                                    </SaveDialog>


                                </ButtonGroup>

                                <ButtonGroup>
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
