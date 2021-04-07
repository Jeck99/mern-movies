import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}));
export default function HeaderComponent() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.root}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Movies App</Typography>
                    <Link to='/'>Home</Link>
                    <Link to='/add-movie'>NEW</Link>
                    <Link to='/movies'>Movies</Link>
                    <Button color="inherit">Login</Button>
                    <Avatar alt="avatar" src="pictures/1046436.jpg" className={classes.large} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
