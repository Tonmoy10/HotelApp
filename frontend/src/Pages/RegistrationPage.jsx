import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function RegistrationPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] =useState('')
    const [pass, setPass] = useState('')
    const [passConfirm, setPassConfirm] = useState('')


    async function confirmReg(e) {
        e.preventDefault()
        try {
         await axios.post("/register", {name, email, phone, pass, passConfirm});
         alert("Registration Successful!")
         window.location.href = "/login"
        } catch (error) {
            alert(`Unsuccessful Registration due to an error! \n${error}`)
        }
    }


    return (
        <div className="flex justify-around items-center min-w-full">
            <form className="max-w-lg mx-auto" onSubmit={confirmReg}>
                <h1 className="text-2xl text-center font-bold font-serif pt-20">Create a New Account</h1>
                <input type="text" name="name" placeholder="Name" value={name}
                 onChange={e => setName(e.target.value)}/>
                
                <input type="email" name="email" placeholder="example@email.com" value={email} 
                onChange={e => setEmail(e.target.value)}/>

                <div className="flex">
                    <div className="phone max-w-fit text-gray-400">+880</div>
                    <input type="text" name="phone" placeholder="01XXXXXXXXX" minLength={11} maxLength={11} value={phone}
                    onChange={e => setPhone(e.target.value)}/>
                </div>
                
                <input type="password" name="pass" placeholder="Password" value={pass} 
                onChange={e => setPass(e.target.value)}/>
                
                <input type="password" name="passConfirm"  placeholder="Confirm Password" value={passConfirm} 
                onChange={e => setPassConfirm(e.target.value)}/>
                <button className="sub">Confirm</button>
                <div className="text-center text-slate-400">
                    Already have an account?
                    <Link to={"/login"} className="px-1 text-red-600 font-sans underline">Login</Link>
                </div>
            </form>
        </div>
    )
}