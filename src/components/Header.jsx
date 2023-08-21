import postmanlogo from './postmanlogo.png';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    logo:{
        width: 100,
        padding:5
    }
})

const Header = () => {
    const classes = useStyles();
    return(
        <img src={postmanlogo} className={classes.logo}/>
    );
}

export default Header;