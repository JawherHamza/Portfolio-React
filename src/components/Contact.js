import React from 'react';
import { Container, Grid, Button, ButtonBase, Fab, TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { FormattedMessage } from 'react-intl';
import SendIcon from '@material-ui/icons/Send';
import PlaceIcon from '@material-ui/icons/Place';

export default function Contact() {
    return (
        <div>
            <Container>
                <h1 class="title">
                    <FormattedMessage id="contact-title" />
                </h1>
                <h2 style={{ fontWeight: 100 }}>
                    {/* Do not hesitate to get in touch with me if you have a any request */}
                    <FormattedMessage id="get-in-touch" />
                </h2>
                <Grid container >
                    <Grid item md={8} style={{ padding: '10px' }}>
                        <h3><FormattedMessage id="post-a-message" /></h3>
                        <form>
                            <FormattedMessage id='placeholder.name'>
                                {placeholder => <Input
                                    style={{ margin: "10px 0" }} fullWidth={true} type="text" id="name" placeholder={placeholder} required />}
                            </FormattedMessage>
                            <FormattedMessage id='placeholder.phone'>
                                {placeholder => <Input
                                    style={{ margin: "10px 0" }} fullWidth={true} type="phone" id="phone" placeholder={placeholder} required />}
                            </FormattedMessage>
                            <FormattedMessage id='placeholder.your message'>
                                {placeholder =>
                                    <TextField
                                        style={{ margin: "10px 0" }}
                                        placeholder={placeholder}
                                        fullWidth={true}
                                        multiline={true}
                                        rows={3}
                                        rowsMax={6}
                                        required
                                    />
                                }
                            </FormattedMessage>
                            <Button variant="outlined" style={{ float: 'right', margin: "10px" }}>
                                <SendIcon />&nbsp;&nbsp;<FormattedMessage id='send' />
                            </Button>
                        </form>
                    </Grid>
                    <Grid item md={4} style={{ padding: '10px' }}>
                        <h3>Adress</h3>
                        <PlaceIcon />
                        <p>
                            Rades, Ben Arous, TUNISIE<br />
                            Email: <a href="mailto:jawher_hamza@yahoo.fr">jawher_hamza@yahoo.fr</a>
                        </p>
                    </Grid>
                </Grid>
            </Container >
        </div>
    );
}
