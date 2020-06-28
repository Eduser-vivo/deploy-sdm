import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    minHeight:'100vh',
    paddingTop:20,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow:"0.2px 0.2px 2px 2px #9999",
    padding:"30px 50px 50px 50px ",
    borderRadius:10,
    backgroundColor:'#FFF',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));