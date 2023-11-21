import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Alert, Button, Snackbar, TextField } from '@mui/material';

// ----------------------------------------------------------------------

export default function EditUser() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [showMsg, setShowMsg] = useState();
    const [address1, setAddress1] = useState();
    const [address2, setAddress2] = useState();
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [contractAmt, setContractAmt] = useState();
    const handleSave = () => {
        setTimeout(() => {
            navigate('/contracts')
        }, 1000);
        setShowMsg(true)
    }
    const handleBack = () => {
        navigate('/contracts')
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowMsg(false);
    };

    return (
        <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4">Edit Contracts</Typography>
            </Stack>
            <Paper variant="elevation" elevation={3} sx={{ p: 3 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography>
                            Edit Form
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                        <TextField
                            value='Mr.'
                            id="title"
                            name="title"
                            label={t('title')}
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={10} sm={0}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label={t('firstName')}
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            value='Est Ut Volupate'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label={t('address1')}
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="outlined"
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label={t('address2')}
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="outlined"
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="longitude"
                            name="longitude"
                            label={t('longitude')}
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="outlined"
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="latitude"
                            name="latitude"
                            label={t('latitude')}
                            fullWidth
                            variant="outlined"
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="contract-amount"
                            name="contract-amount"
                            label={t('contractAmount')}
                            fullWidth
                            variant="outlined"
                            value={contractAmt}
                            onChange={(e) => setContractAmt(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <Snackbar
                            open={showMsg}
                            autoHideDuration={1000}
                            onClose={handleClose}
                        // action={action}
                        >
                            <Alert severity="success">{t('updatedSuccessful')}</Alert>
                        </Snackbar>

                        <Button variant='contained' sx={{ mr: 2 }} onClick={handleSave}>{t('save')}</Button>
                        <Button variant='contained' onClick={handleBack}>{t('back')}</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
