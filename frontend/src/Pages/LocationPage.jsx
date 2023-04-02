import { Form, Link, useParams } from "react-router-dom"

export default function LocationPage() {
    let {option} = useParams();
    return (
        <div>
            {option !== 'new' && (
                <div className="flex justify-end text-white">
                <div className="flex gap-1 bg-red-300 items-center justify-center max-w-md py-2 px-4 mt-5 rounded-lg">
                    <Link to='/account/accommodation/new' className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    <div className="font-bold ml-1">Add New Location</div>
                    </Link>
                </div>
            </div>
            )};
            
            {/* {{option === 'new' && (
                <form>
                    <input type="text" name="title" placeholder="Enter the name of your hotel" />
                    <input type="text" name="address" placeholder="Enter the address" />

                </form>}
            )}; */}
        </div>
    )
}

