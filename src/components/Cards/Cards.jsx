import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if(!confirmed) {
        return 'Loading....';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectado</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toLocaleDateString('pt-BR', options)}</Typography>
                        <Typography variant="body2">Número de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperado</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toLocaleDateString('pt-BR', options)}</Typography>
                        <Typography variant="body2">Número de recuperações de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toLocaleDateString('pt-BR', options)}</Typography>
                        <Typography variant="body2">Número de mortes causadas por COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;