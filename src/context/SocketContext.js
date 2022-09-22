import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ( { children }) => {

    const { socket, online } = useSocket('https://serversocketkant.netlify.app'); 

    return (
        <SocketContext.Provider value={{ online,socket }}>
            { children }
        </SocketContext.Provider>
    )
}