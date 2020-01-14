import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import messagesen from '../messages/en.json'
import { Grid, Container } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
    passion: {
        padding: '1px 0px 0 0',
        margin: '30px 0px',
        backgroundColor: '#a6a6a6',
    },
    imgCircle: {
        margin: "20",
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        objectFit: "cover",
    }
}));

export default function VerticalTabs() {
    let classes = useStyles()
    let passions = Object.values(messagesen.passions)
    return (
        <div className={classes.passion} id="passions">
            <Container>
                <h1 class="title" >
                    <FormattedMessage id="passion-title" />
                </h1>
                <div style={{
                    textAlign: "center"
                }}>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="stretch"
                        spacing={6}>
                        {passions.map((passion) => <Grid item style={{ margin: '30px 0' }}>
                            <img className={classes.imgCircle}
                                src={passion.pic} />
                            <h3>{passion.name}</h3>
                        </Grid>)}
                    </Grid>
                </div >
            </Container >
        </div>
    );
}