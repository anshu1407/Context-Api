import { GET_NEWS, GET_DESCRIPTION } from "../types";

const NewsReducer = (state, action) => {
    const { payload, type } = action;
  
    switch (type) {
      case GET_NEWS:
        return {
          ...state,
          news: payload,
        };
      case GET_DESCRIPTION:
        return {
          ...state,
          activeNews: payload,
        };
      default:
        return state;
    }
  };

  export default NewsReducer;