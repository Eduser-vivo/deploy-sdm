import React from 'react';
import '../styles/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import {MenuAppBar} from '../topbar/MenuAppBar'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"0 auto",
    padding:0,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.primary,
    width: '200px',
    height:'100px',

  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow({item1, item2, item3, root1, root2, root3}) {
    return (
      <React.Fragment>
         <MenuAppBar />
        <Grid container className={classes.root} spacing={2} style={{ marginLeft:"50px", marginBottom:"30px"}} >
          <Grid item xs={12}>
              <Grid container justify="center" spacing={2} >
                <Grid item >
                   <Paper className={classes.paper}>
                     <Link to={{pathname:`/dashbord/${root2}`}}>
                        <Button  style={{height:'100%', fontFamily:'ALGERtlIAN',}}
                                fullWidth={true} variant="contained"  color="primary" >
                                  {item2}
                        </Button>
                      </Link>
                    </Paper>
                </Grid>
                <Grid item >
                   <Paper className={classes.paper}>
                      <Link to={{pathname:`/dashbord/${root1}`}}>
                        <Button style={{height:'100%', fontFamily:'ALGERtlIAN', }} 
                                  fullWidth={true}  variant="contained" color="primary" >
                                {item1}
                          </Button>  
                      </Link>
                    </Paper>
                </Grid>
                <Grid item >
                   <Paper className={classes.paper}>
                     <Link to={{pathname:`/dashbord/${root3}`}}>
                        <Button  style={{height:'100%', fontFamily:'ALGERtlIAN',}} 
                                fullWidth={true} variant="contained"  color="primary" >
                                  {item3}
                        </Button>
                     </Link>
                    </Paper>
                </Grid>
              </Grid>
          </Grid>

        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} id="homeContainerId">
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={5}>
          <FormRow item1="GESTION" root1="gestion" item2="CAISSE" root2="caisse" item3="COMMANDE" root3="commande" />
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
