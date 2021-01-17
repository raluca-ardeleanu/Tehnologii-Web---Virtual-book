import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp'
import TextEditor from './TextEditor/TextEditor'
import ListNotes from './List/ListNotes'
import React from "react";

const AppRouter = () => {
    if(localStorage.getItem('jwt')) {
        return (
            <div style={style}>
                <Router>
                    <Switch>
                        <Route path="/login" component={LogIn}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/editor" component={TextEditor}/>
                        <Route path="/listnote" component={ListNotes}/>
                    </Switch>
                </Router>
            </div>
        )
    } else {
        return (
            <div style={style}>
                <Router>
                    <Switch>
                        <Route path="/" component={LogIn}/>
                    </Switch>
                </Router>
            </div>)
    }
}

const style={
    marginTop:'20px'
}

export default AppRouter;