import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../component/Home';
import NewsList from '../component/NewsList';
import Description from '../component/Description';

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/newslist" component={NewsList}></Route>
            <Route path="/newsList/description/:id" component={Description}></Route>
        </Switch>
        </BrowserRouter>
    )

}
export default Routes;