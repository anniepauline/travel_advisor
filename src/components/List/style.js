import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2), minWidth: 100, marginBottom: '20px',
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
    [theme.breakpoints.down("xs")]:{
      fontSize:'2rem',
      fontWeight: 500,
      letterSpacing: '-0.2px',
    },
    color: 'transparent',
    backgroundClip: 'text',
    color:'#3C84AB',
    fontFamily:'Roboto',
    paddingTop:'20px',
    fontSize:'2rem',
    fontWeight: 500,
    letterSpacing: '-0.2px',
  },
  inputLabel:{
    [theme.breakpoints.down("xs")]:{
      variant:"body2" ,
      fontSize: '4vw',
    },
  },
  select:{
    [theme.breakpoints.down("xs")]:{
      fontSize: '4vw',
    } ,
    color:'#3C84AB',
  },
  listContainer:
  {
    marginLeft:'20px',
  }

}));