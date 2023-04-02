import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link } from "react-router-dom"
import { Navigate, useParams } from "react-router-dom"
import axios from "axios"

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
                <Link className={connectClass('profile')} to='/account'>View Profile</Link>
                <Link className={connectClass('history')} to='/account/history'> Booking History</Link>
                <Link className={connectClass('accommodation')} to='/account/accommodation'>My Accommodaions</Link>
            </nav>
            {branch=='profile' && (
                <div className=" flex justify-center max-w-lg gap-4">
                    Logged in as {user.data.name}
                    <button onClick={logout} className="max-w-md bg-red-200 rounded-md text-white">Logout</button>
                </div>
            )}
        </div>
    )
}