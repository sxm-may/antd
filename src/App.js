import React from 'react';

import {HashRouter as Router ,Route,Switch} from 'react-router-dom'
import Reports from "../zuoye/report/Reports"
import ContentUser from '../mag/ContentUser'
import { createBrowserHistory } from 'history';
import Login from "../login/Login"
import Menu from "./menu/Menu"


export default class App extends React.Component{


    render(){
        return(
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    
                    <Route path="/menu" component={Menu} />
                    
                    
                </Switch>
            </Router>
        )
    }
   


}
