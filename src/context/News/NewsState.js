import React, { useReducer } from "react";
import axios from "axios";

import NewsContext from "./NewsContext";
import NewsReducer from "./NewsReducer";
import { GET_NEWS, GET_DESCRIPTION } from "../types";

const NewsState = ({ children }) => {
    let initialState= {
        news:[],
        activeNews: null,
    };

    // useReducer is a hook used for complex state logic it takses two parameter reducer function and state
    const [state, dispatch]= useReducer(NewsReducer, initialState);

    //The state provides us with the values of the state, as the name suggests.
    //The dispatch function helps us to dispatch the data we receive to our reducer function.
    const getNews = async () => {
        try{
            let res = await axios.get("https://node-hnapi.herokuapp.com/news");
            console.log(res, '------>>> res');
            const { data } = res;
            dispatch({type: GET_NEWS, payload: data})
        }catch (error){
            console.log(error);
        }
    }

    const getDescription = async (id) => {
        try{
            const res = await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`);
            let { data } = res;

            dispatch({ type: GET_DESCRIPTION, payload: data});
        } catch(error){
            console.log(error);
        }
    }

    return(
        <NewsContext.Provider
        value={{
        news: state.news,
        activeNews: state.activeNews,
        getNews,
        getDescription,
        }}>
            {children}
        </NewsContext.Provider>
    )

};

export default NewsState;