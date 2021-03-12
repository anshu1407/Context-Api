import React, { useReducer } from 'react'
import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = ({children})=>{
    let initialState={
        user:null,
    };
    const [state, dispatch] = useReducer(UserReducer, initialState)

    return (
        <UserContext.Provider value={{
            user:state.user
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState
