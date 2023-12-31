import { colors } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
      color:'#F5F5F5',
      fontFamily:'-apple-system',
      textAlign: 'right',
      fontSize:'1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.2px',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto',},
  },
  searchIcon: {
    padding: theme.spacing(0, 2), height: '10%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex', justifyContent: 'space-between',
        backgroundImage:' linear-gradient(to left, #6DA9E4, #19376D)',

  },
  image:{
    height:'3.2vh',
    width:'3.2vh',
    display:'flex-inline',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'1px 6px -4px',
  }
}));