import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import LocationPage from './LocationPage'
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Account() {
    const {user, setUser, flag} = useContext(UserContext)
    const [redirect, setRedirect] =useState(null)

    let {branch} = useParams()
    if (branch==undefined) {
        branch = 'profile'
    }

    async function logout() {
        await axios.post("/logout");
        setRedirect("/login")
    }
    
    if(!flag) {
        return 'Wait for a while'
    }

    if (flag && !user) {
        <Navigate to ={'/login'} />
    }

    function connectClass( type=null) {
        let class_name ='p-5 '
        if (type===branch) {
            class_name += ' text-white justify-center font-bold rounded-full bg-red-200'
        }
        return class_name
    }

    if(redirect) {
        setUser(null)
        return <Navigate to = {redirect} />
    }
    return (
        <div>
            <nav className="flex justify-center gap-6">
                <div className="flex items-center justify-center">  
                    <Link className={connectClass('profile')} to='/account'>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <div >View Profile</div>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center justify-center">  
                    <Link className={connectClass('history')} to='/account/history'>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            <div >Reservation History</div>
                        </div>
                    </Link>
                </div>

                <div className="flex items-center justify-center">  
                    <Link className={connectClass('accommodation')} to='/account/accommodation'>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                            </svg>
                            <div >My Accommodations</div>
                        </div>
                    </Link>
                </div>
            </nav>


            {branch==='profile' && (
                <div className="flex flex-col items-center">
                    <div className="text-2xl mt-5">
                        Welcome {user.data.name}! 😃
                    </div>
                    <div className="max-w-md flex rounded-md text-black px-2 py-1 mt-7 bg-gray-200 hover:bg-gray-300 hover:shadow">
                        <div className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        </div>
                        <div><button onClick={logout} className="mr-1">Logout</button></div>
                    </div>
                </div>
            )}

            {branch==='accommodation' && (
                <LocationPage/>
            )}
        </div>
    )
}