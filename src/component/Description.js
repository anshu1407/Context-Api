import React, { useContext, useEffect } from "react";

import newsContext from "../context/News/NewsContext";

const Description = ({match}) => {

    useEffect(() => {
      NewsContext.getDescription(match.params.id);
   }, []);

   const NewsContext = useContext(newsContext);
    console.log(NewsContext.activeNews, 'NewsContext.activeNews.title');

    const { activeNews } = NewsContext;

    return (
        <>
          <div className="container">
            {activeNews ? (
              <div>
                <h1 className="text-center"> {activeNews.title} </h1>
    
                <div className="row">
                  <em className="col-4"> by -- {activeNews.user} </em>
                  <em className="col-4">Published : {activeNews.time_ago}</em>
                  <em className="col-4">Comments : {activeNews.comments.length}</em>
                </div>
    
                <div className="row">
                  <em className="col-6">
                    {" "}
                    link: <a href={activeNews.url}>{activeNews.url} </a>{" "}
                  </em>
                  <em className="col-6">
                    {" "}
                    Points :{" "}
                    <span className="badge badge-primary">{activeNews.points}</span>
                  </em>
                </div>
              </div>
            ) : (
              "Description"
            )}{" "}
          </div>
        </>
      );
};

export default Description;