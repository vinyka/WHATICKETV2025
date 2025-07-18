import React, { useState, useEffect } from "react";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import { i18n } from "../../translate/i18n";
import { MenuItem, FormControl, InputLabel, Select } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { InputAdornment, IconButton } from "@material-ui/core";
import QueueSelectSingle from "../../components/QueueSelectSingle";

import api from "../../services/api";
import toastError from "../../errors/toastError";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
    },
    multFieldLine: {
        display: "flex",
        "& > *:not(:last-child)": {
            marginRight: theme.spacing(1),
        },
    },

    btnWrapper: {
        position: "relative",
    },

    buttonProgress: {
        color: green[500],
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    colorAdorment: {
        width: 20,
        height: 20,
    },
}));

const PromptSchema = Yup.object().shape({
    name: Yup.string().min(5, "¡Demasiado corto!").max(100, "¡Demasiado tiempo!").required("Obligatorio"),
    prompt: Yup.string().min(50, "¡Demasiado corto!").required("Describe el entrenamiento para la Inteligencia Artificial"),
    voice: Yup.string().required("Establezca el modo en Voz"),
    max_tokens: Yup.number().required("Introduzca el número máximo de tokens"),
    temperature: Yup.number().required("Introduzca la temperatura"),
    apikey: Yup.string().required("Introduzca al API Key"),
    queueId: Yup.number().required("Introduzca el departamento"),
    max_messages: Yup.number().required("Introduzca el número máximo de mensajes")
});

const PromptModal = ({ open, onClose, promptId }) => {
    const classes = useStyles();
    const [selectedVoice, setSelectedVoice] = useState("texto");
    const [showApiKey, setShowApiKey] = useState(false);

    const handleToggleApiKey = () => {
        setShowApiKey(!showApiKey);
    };

    const initialState = {
        name: "",
        prompt: "",
        voice: "texto",
        voiceKey: "",
        voiceRegion: "",
        maxTokens: 100,
        temperature: 1,
        apiKey: "",
        queueId: null,
        maxMessages: 10
    };

    const [prompt, setPrompt] = useState(initialState);

    useEffect(() => {
        const fetchPrompt = async () => {
            if (!promptId) {
                setPrompt(initialState);
                return;
            }
            try {
                const { data } = await api.get(`/prompt/${promptId}`);
                setPrompt(prevState => {
                    return { ...prevState, ...data };
                });
                setSelectedVoice(data.voice);
            } catch (err) {
                toastError(err);
            }
        };

        fetchPrompt();
    }, [promptId, open]);

    const handleClose = () => {
        setPrompt(initialState);
        setSelectedVoice("texto");
        onClose();
    };

    const handleChangeVoice = (e) => {
        setSelectedVoice(e.target.value);
    };

    const handleSavePrompt = async values => {
        const promptData = { ...values, voice: selectedVoice };
        if (!values.queueId) {
            toastError("Introduzca el departamento");
            return;
        }
        try {
            if (promptId) {
                await api.put(`/prompt/${promptId}`, promptData);
            } else {
                await api.post("/prompt", promptData);
            }
            toast.success(i18n.t("promptModal.success"));
        } catch (err) {
            toastError(err);
        }
        handleClose();
    };

    return (
        <div className={classes.root}>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                scroll="paper"
                fullWidth
            >
                <DialogTitle id="form-dialog-title">
                    {promptId
                        ? `${i18n.t("promptModal.title.edit")}`
                        : `${i18n.t("promptModal.title.add")}`}
                </DialogTitle>
                <Formik
                    initialValues={prompt}
                    enableReinitialize={true}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            handleSavePrompt(values);
                            actions.setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ touched, errors, isSubmitting, values }) => (
                        <Form style={{ width: "100%" }}>
                            <DialogContent dividers>
                                <Field
                                    as={TextField}
                                    label={i18n.t("promptModal.form.name")}
                                    name="name"
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                />
                                <FormControl fullWidth margin="dense" variant="outlined">
                                    <Field
                                        as={TextField}
                                        label={i18n.t("promptModal.form.apikey")}
                                        name="apiKey"
                                        type={showApiKey ? 'text' : 'password'}
                                        error={touched.apiKey && Boolean(errors.apiKey)}
                                        helperText={touched.apiKey && errors.apiKey}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleToggleApiKey}>
                                                        {showApiKey ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </FormControl>
                                <Field
                                    as={TextField}
                                    label={i18n.t("promptModal.form.prompt")}
                                    name="prompt"
                                    error={touched.prompt && Boolean(errors.prompt)}
                                    helperText={touched.prompt && errors.prompt}
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    rows={10}
                                    multiline={true}
                                />
                                <QueueSelectSingle />
                                <div className={classes.multFieldLine}>
                                    <FormControl fullWidth margin="dense" variant="outlined">
                                    <InputLabel>{i18n.t("promptModal.form.voice")}</InputLabel>
                                        <Select
                                            id="type-select"
                                            labelWidth={60}
                                            name="voice"
                                            value={selectedVoice}
                                            onChange={handleChangeVoice}
                                            multiple={false}
                                        >
                                            <MenuItem key={"texto"} value={"texto"}>
                                                Texto
                                            </MenuItem>
                                            <MenuItem key={"es-MX-DaliaNeural"} value={"es-MX-DaliaNeural"}>
                                                Dalia MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-JorgeNeural"} value={"es-MX-JorgeNeural"}>
                                                Jorge MX - voz masculina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-BeatrizNeural"} value={"es-MX-BeatrizNeural"}>
                                                Beatriz MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-CandelaNeural"} value={"es-MX-CandelaNeural"}>
                                                Candela MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-CarlotaNeural"} value={"es-MX-CarlotaNeural"}>
                                                Carlota MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-CecilioNeural"} value={"es-MX-CecilioNeural"}>
                                                Cecilio MX - voz masculina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-GerardoNeural"} value={"es-MX-GerardoNeural"}>
                                                Gerardo MX - voz masculina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-LarissaNeural"} value={"es-MX-LarissaNeural"}>
                                                Larissa MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-LucianoNeural"} value={"es-MX-LucianoNeural"}>
                                                Luciano MX - voz masculina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-MarinaNeural"} value={"es-MX-MarinaNeural"}>
                                                Marina MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-PelayoNeural"} value={"es-MX-PelayoNeural"}>
                                                Pelayo MX - voz masculina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-NuriaNeural"} value={"es-MX-NuriaNeural"}>
                                                Nuria MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-RenataNeural"} value={"es-MX-RenataNeural"}>
                                                Renata MX - voz femenina
                                            </MenuItem>
                                            <MenuItem key={"es-MX-YagoNeural"} value={"es-MX-YagoNeural"}>
                                                Yago MX - voz masculina
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Field
                                        as={TextField}
                                        label={i18n.t("promptModal.form.voiceKey")}
                                        name="voiceKey"
                                        error={touched.voiceKey && Boolean(errors.voiceKey)}
                                        helperText={touched.voiceKey && errors.voiceKey}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                    <Field
                                        as={TextField}
                                        label={i18n.t("promptModal.form.voiceRegion")}
                                        name="voiceRegion"
                                        error={touched.voiceRegion && Boolean(errors.voiceRegion)}
                                        helperText={touched.voiceRegion && errors.voiceRegion}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>
                                
                                <div className={classes.multFieldLine}>
                                    <Field
                                        as={TextField}
                                        label={i18n.t("promptModal.form.temperature")}
                                        name="temperature"
                                        error={touched.temperature && Boolean(errors.temperature)}
                                        helperText={touched.temperature && errors.temperature}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                    <Field
                                        as={TextField}
                                        label={i18n.t("promptModal.form.max_tokens")}
                                        name="maxTokens"
                                        error={touched.maxTokens && Boolean(errors.maxTokens)}
                                        helperText={touched.maxTokens && errors.maxTokens}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                    <Field
                                        as={TextField}
                                        label={i18n.t("promptModal.form.max_messages")}
                                        name="maxMessages"
                                        error={touched.maxMessages && Boolean(errors.maxMessages)}
                                        helperText={touched.maxMessages && errors.maxMessages}
                                        variant="outlined"
                                        margin="dense"
                                        fullWidth
                                    />
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    onClick={handleClose}
                                    color="secondary"
                                    disabled={isSubmitting}
                                    variant="outlined"
                                >
                                    {i18n.t("promptModal.buttons.cancel")}
                                </Button>
                                <Button
                                    type="submit"
                                    color="primary"
                                    disabled={isSubmitting}
                                    variant="contained"
                                    className={classes.btnWrapper}
                                >
                                    {promptId
                                        ? `${i18n.t("promptModal.buttons.okEdit")}`
                                        : `${i18n.t("promptModal.buttons.okAdd")}`}
                                    {isSubmitting && (
                                        <CircularProgress
                                            size={24}
                                            className={classes.buttonProgress}
                                        />
                                    )}
                                </Button>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </div>
    );
};

export default PromptModal;