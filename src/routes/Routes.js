import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../component/Home';
import Login from '../component/Login';
import NewsList from '../component/NewsList';
import Description from '../component/Description';
import SignUp from '../component/SignUp';

const Routes = () => {

    const authGuard = (Component) => () => {
        return localStorage.getItem("LoggedinId") ? (
          <Component />
        ) : (
          <Redirect to="/signUp" />
        );
      };
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/dashboard" render={authGuard(Home)}></Route>
            <Route exact path="/newslist" component={NewsList}></Route>
            <Route path="/newsList/description/:id" component={Description}></Route>
        </Switch>
        </BrowserRouter>
    )

}
export default Routes;