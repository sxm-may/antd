import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Reports from "../zuoye/report/Reports"
import ContentUser from '../mag/ContentUser'
import { createBrowserHistory } from 'history';
import Login from "../login/Login"

const hashHistory = createBrowserHistory();


// const BasicRouter =()=>(
//     <HashRouter history={hashHistory}>
//         <Switch>
//             <Route exact path="/reports" component={Reports}></Route>
//             <Route exact path="/contentUser" component={ContentUser}></Route>
//         </Switch>
//     </HashRouter>
// )

// export default BasicRouter;

