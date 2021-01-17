import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ApiService from "../../services/ApiService";
import Home from "../../components/Home/Home"

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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


class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isAuthenticated: false,
            open: false
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClose = event => {
        this.setState({ open: false });
    };

    login = () => {
        const user = {
            userId: this.state.username,
            password: this.state.password
        };
        console.log(user);
        ApiService.sendUser(user)
            .then(res => {
                console.log(res);
                const jwtToken = res.data.accessToken;
                const typeToken  = res.data.tokenType;
                if (jwtToken !== null) {
                    window.localStorage.setItem("jwt", typeToken + " " + jwtToken);
                    this.setState({ isAuthenticated: true });
                } else {
                    this.setState({ open: true });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };



    render() {
        if (this.state.isAuthenticated === true) {
            return <Home/>
        } else {
            return (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={useStyles.paper}>

                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={useStyles.form} noValidate>
                            <br />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                autoFocus
                                name="username"
                                placeholder="Username"
                                onChange={this.handleChange}
                            />
                            <br />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                            <br />
                            <br />
                            <Button //type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={useStyles.submit}
                                onClick={this.login}>
                                Login
                            </Button>
                            <Snackbar
                                open={this.state.open}
                                onClose={this.handleClose}
                                autoHideDuration={1500}
                                message="Check your username and password"
                            />
                        </form>
                    </div>
                </Container>
            );
        }
    }
}

export default LogIn;