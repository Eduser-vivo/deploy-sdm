import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Caisse } from './views/Caisse';
import { Commande } from './views/Commande';
import { Switch, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0),
  },
}));

const Dashbord=()=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
                <MenuAppBar />
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main className={classes.content}>
        <Switch>
            <Route path="/dashbord/caisse">
                <Caisse />              
            </Route>

            <Route path="/dashbord/commande">
                 <Commande />    
            </Route>
        </Switch>
      </main>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <Divider />
        <div className={classes.toolbar}>

            <div style={{margin:'30px'}}>
                <Link to={{pathname:"/"}}>
                    SAVEUR DU MONDE 
                </Link>
            </div>
        </div>
        <Divider/>
        <List>
            <Link to={{pathname:"/dashbord/caisse"}}>
                <ListItem>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={"Caisse"} />
                </ListItem>
            </Link>

            <Link to={{pathname:"/dashbord/commande"}}>
                <ListItem>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={"Commande"} />
                </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
export default Dashbord