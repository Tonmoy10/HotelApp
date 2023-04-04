import { useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import Features from "../features";

export default function LocationPage() {
    let {option} = useParams();
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [info, setInfo] = useState('')
    const [features, setFeatures] = useState([])
    const [images, setImages] = useState([])
    const [linkImage, setLinkImage] = useState([])
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const [people, setPeople] = useState(1)

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
            )}

            {option === 'new' && (
                <div className="flex justify-center h-min mt-10 items-center">
                    <form className="max-w-2xl mx-auto">
                        <p className="font-bold text-lg text-center">General Information</p>
                        <fieldset className="border p-4 rounded-lg">
                            <input type="text" name="title" placeholder="Hotel Name" 
                            value={title} onChange={e => setTitle(e.target.value)}/>
                            <input type="text" name="address" placeholder="Hotel Address" 
                            value={address} onChange={e => setAddress(e.target.value)} />
                            <textarea type="text" name="description" placeholder="Hotel Description" 
                            value={description} onChange={e => setDescription(e.target.value)}/>
                            <textarea type="text" name="info" placeholder="Other Information. eg. rules" 
                            value={info} onChange={e => setInfo(e.target.value)}/>
                        </fieldset>

                        <p className="font-bold text-lg mt-2 text-center">Features</p>
                        <fieldset className="border p-4 rounded-lg">
                            <div className="grid grid-cols-3 gap-y-3 gap-2">
                                <Features selected={features} onChange={setFeatures}/>
                            </div>

                        </fieldset>

                        <p className="font-bold text-lg mt-2 text-center">Images</p>
                        <fieldset className="border p-4 rounded-lg">
                            <div className="flex justify-between">
                                <input className="sub" type="text" name="link" placeholder="Upload Images Using Link. Format:jpeg" 
                                value={linkImage} onChange={e => setLinkImage(e.target.value)} />
                                <button className="flex max-w-fit px-3 py-2 border shadow-md rounded-lg my-2 font-bold bg-slate-100">ADD</button>
                            </div>
                            <div className="flex bg-transparent">
                                <button className="flex max-w-fit px-3 py-2 border shadow-md rounded-lg my-2 bg-slate-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <div className="font-bold">Upload Images From Your Device</div>
                                </button>
                            </div>
                        </fieldset>

                        <p className="font-bold text-lg mt-2 text-center">Hotel Timing</p>
                        <fieldset className="border p-4 rounded-lg">
                            <div className="grid grid-cols-3 gap-x-1">
                                <div>
                                    <p>Check In</p>
                                    <input type="text" name="checkIn" placeholder="14:00" value={checkin} onChange={e => setCheckin(e.target.value)}/>
                                </div>
                                <div>
                                    <p>Check Out</p>
                                    <input type="text" name="checkOut" placeholder="16:00" value={checkout} onChange={e => setCheckout(e.target.value)}/>
                                </div>
                                <div>
                                    <p>Guests</p>
                                    <input type="text" name="people" placeholder="Eg. 2" value={people} onChange={e => setPeople(e.target.value)}/>
                                </div>
                            </div>

                        </fieldset>

                        <button className="sub">Register</button>
                    

                    

                    </form>
                </div>
            )}
        </div>
    )
}


