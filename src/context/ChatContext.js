import { createContext, useContext, useReducer } from "react";
import { AuthConext } from "./AuthContext";

export const ChatContext=createContext();

export const ChatContextProvide=({children})=>{

    const {currentUser}=useContext(AuthConext);

    const INITIAL_STATE={
        chatId:"null",
        user:{},
    }

    const chatReducer=(state,action)=>{
        switch (action.type){
            case "CHANGE_USER":
                return{
                    user: action.payload,
                    chatId: currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid : action.payload.uid + currentUser.uid,
                };
            default:
                return state;
        }
    }

    const [state,dispatch]=useReducer(chatReducer,INITIAL_STATE);
    
    return(
        <ChatContext.Provider value={{data:state,dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}