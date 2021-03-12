import {LOGIN,LOGOUT} from '../../context/types';

const UserReducer=(state, action)=> {
    const{payload, type}= action;
    switch(type){
        case LOGIN:
            return{
                ...state,user:payload
            }
        case LOGOUT:
            return{
                ...state,user:payload
            }
        default:
            return state;
    }
};
export default UserReducer;
