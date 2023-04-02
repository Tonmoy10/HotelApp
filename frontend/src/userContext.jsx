import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {

    const [user, setUser] = useState(null)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        if(!user) {
            axios.get('/user').then(({data}) => {
            setUser(data);
            setFlag(true)
            });
        }
    },[])


    return (
        <UserContext.Provider value ={{user, setUser, flag}}>
            {children}
        </UserContext.Provider>
    );
}