import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  header:{
    fontSize: '30px',
    fontWeight: '600',
    color: 'transparent',
    backgroundClip: 'text',
    color:'#3C84AB',
    fontFamily:'Roboto',
    padding:'10px'
  },
  inputLabel:{
    variant:"body2" ,
    fontSize: '50px'
  }
}));