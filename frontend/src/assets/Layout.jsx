import { Outlet } from "react-router-dom";
import Header from "../Header";


export default function() {
    return (
        <div className="flex-col flex h-full">
            <Header/>
            <div className="p-3 h-5/6 ">
            <Outlet/>
            </div>
        </div>
        
    );
}