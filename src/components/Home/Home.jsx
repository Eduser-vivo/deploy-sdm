import React from 'react';
import '../styles/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    width: '200px',
    height:'100px',
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow({item1, item2, item3}) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Button style={{height:'100%', fontFamily:'ALGERtlIAN', }} fullWidth={true}  variant="contained" color="primary" >{item1}</Button>  </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Button  style={{height:'100%', fontFamily:'ALGERtlIAN',}} fullWidth={true} variant="contained"  color="primary" >{item2}</Button></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Button  style={{height:'100%', fontFamily:'ALGERtlIAN',}} fullWidth={true} variant="contained"  color="primary" >{item3}</Button></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} id="homeContainerId">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={5}>
          <FormRow item1="GESTION" item2="CAISSE" item3="COMMANDE" />
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow item1=" PERSONNALISER " item2="GENERER DES RAPPORTS" item3="STATISTIQUES"/>
        </Grid>
        <Grid container item xs={12} spacing={5}>
          <FormRow item1="JOURNAL DES ACTIVITES" item2="AJOUTER UN PRODUIT" item3="CREER UNE FORMULE" />
        </Grid>
      </Grid>
    </div>
  );
}
