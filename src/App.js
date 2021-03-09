import React from "react";

import NewsList from "./component/NewsList";
import Description from "./component/Description";

import NewsState from "./context/News/NewsState";

import "bootstrap/dist/css/bootstrap.css";
import Routes from "./routes/Routes";

// className="d-flex flex-row justify-content-start h-100"

//NewsState is global state which is used by other components.
function App() {
  return (
    <NewsState> 
      <div>
        <Routes/>
        {/* <NewsList  />
        <Description /> */}
      </div>
    </NewsState>
  );
}

export default App;
