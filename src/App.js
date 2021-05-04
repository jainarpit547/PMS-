import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
//import UserList from './components/UserList/User';
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./views/private-route/PrivateRoute";
import './App.css';

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

//Pages
const Login = React.lazy(()=> import('./views/components/Login/Login'));
const Logout = React.lazy(() => import('./views/components/Logout/Logout'));

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));
    const currentTime = Date.now() / 1000;
    
    if (decoded.expires < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = "/";
    }
  }

class App extends Component {
    render() {
        return (
            <HashRouter >
                <React.Suspense fallback={loading}>
                    <Switch>
                
                        <Route exact path="/" name="Login" render={props => <Login {...props}/>} />
                        <Route exact path="/login" name="Login" render={props => <Login {...props}/>} />
                        <Route exact path="/logout" name="Logout" render={props => <Logout {...props}/>} />
                    
                        <Switch>
                             <PrivateRoute path="/user-list" name="UserList" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/add-user" name="AddUser" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/user-detail" name="AddUser" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/add-project" name="AddProject" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/project-list" name="ProjectList" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/dashboard" name="Dashboard" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/technology-list" name="TechnologyList" component={props => <TheLayout {...props}/>} />
                             <PrivateRoute path="/add-technology" name="TechnologyList" component={props => <TheLayout {...props}/>} />
                        </Switch>
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}

export default App; 
