import React from 'react'
import RouteConstant from '../routes/RouteConstants';

function Home({history}) {
    return (
        <div>
            <h1>Home Page</h1>
            <br/>
            <span
              onClick={() => history.push(
                `${RouteConstant.NewsList.path}`,
              )}>NewsList</span>
        </div>
    )
}

export default Home;
