import React, { useContext, useEffect } from "react";

import newsContext from "../context/News/NewsContext";
import styles from './newslist.module.scss';
import RouteConstant from '../routes/RouteConstants';

const NewsList = ({history}) => {
    const NewsContext = useContext(newsContext);

    useEffect(() => {
       NewsContext.getNews();
    }, []);

    return (
        <>
          <div className="list-group h-100" >
            {NewsContext.news.length
              ? NewsContext.news.map((news) => (
                  <p
                    key={news.id}
                    // href="#!"
                    // onClick={() => NewsContext.getDescription(news.id)}
                    className="list-group-item list-group-item-action text-truncate"
                    onClick={()=> history.push(`${RouteConstant.Description.path}/${news.id}`)}
                  >
                    {news.title}
                  </p>
                ))
              : null}
          </div>
        </>
      );
};

export default NewsList;