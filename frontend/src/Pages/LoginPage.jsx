import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { userContext } from "../userContext";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const {user, setUser} = useContext(userContext)
    const [redirect, setRedirect] = useState(false)
    const [flag, setFlag] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const userInfo = await axios.post("/login", {email, pass});
            setUser(userInfo) // SETTING THE USER VALUE FOR USER CONTEXT
            setFlag(true)
            setRedirect(true)
        } catch (error) {
            alert(`Error while logging in! \n${error}`)
        }   
    }
    if (redirect) {
        return <Navigate to = {'/account'}/>
    }
    return (
        <div className="flex justify-center h-min items-center">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-2xl text-center font-bold font-serif pt-20">Login</h2>
                <input type="email" name="email" placeholder="example@email.com" className="logEmail" value={email} 
                onChange={e => setEmail(e.target.value)} />
                <input type="password" name="pass" placeholder="Enter your password" className="logPass" value={pass}
                onChange={e => setPass(e.target.value)}/>
                <button className="sub">Login</button>
                <div className="text-center text-slate-400">
                    Do not have an account?
                    <Link to={"/register"} className="px-1 text-red-600 font-sans underline">Register</Link>
                </div>
            </form>
            {/* <p>{user?`${user.email}` : "no hello"}</p> */}
            {/* <p>{flag
                ?(`${user.data.name}`)
                :(user?`${user.email}` : "no hello")}</p> */}
        </div>
    );
}