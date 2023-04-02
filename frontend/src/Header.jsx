import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext";

export default function Header() {
    const {user} = useContext(UserContext)
    return (
        <div className="bg-red-300"> 
            <header className='p-3 flex justify-between'>
                <Link to={'/account'} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-black-2 fill-red-400 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    <span className="text-xl font-bold font-serif text-slate-700 ">HotelAID</span>
                </Link>
                <div className='flex gap-4 border border-grey-300 py-2 px-6 rounded-full shadow-lg items-center bg-white'>
                    <div>Place</div>
                    <div className='border-l'></div>
                    <div>Time</div>
                    <div className='border-l'></div>
                    <div>Guests</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 fill-red-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>

                <div className='flex gap-2 border border-grey-300 py-2 px-4 rounded-full shadow-lg items-center bg-white'>
                    <Link to={user? '/account' :'/login'} className='flex'>
                        {!!user && (
                            <div className="font-bold pr-1">
                            {user.name===undefined?user.data.name:user.name}
                            {/* {user.data.name} */}
                            </div>
                        )}  {/* CHECKS IF USER HAS VALUE TO SHOW IN HEADER */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-gray-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Link>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                    </div>
                </div>
            </header>
        </div>
    );
}