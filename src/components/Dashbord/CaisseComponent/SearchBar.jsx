import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    margin:'0 auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

 const CaisseSearchBar=()=> {
  const classes = useStyles();

  return (
        <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
        </IconButton>
        <InputBase
            className={classes.input}
            placeholder="Reachercher un produit"
            inputProps={{ 'aria-label': 'Reachercher un produit' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
            <DirectionsIcon />
        </IconButton>
        </Paper>
  );
}
export default CaisseSearchBar