import { useState } from "react";
import axios from "axios";

export function ImageUpload({imagesUploaded, onChange}) {

    const [linkImage, setLinkImage] = useState([])

    async function uploadImageLink(e) {
        e.preventDefault()
        const {data:filename} = await axios.post('/linkupload', {link: linkImage});
        onChange(prev => {
            return [...prev, filename];
        });
        setLinkImage('');
    }

        function uploadLocalImage(e) {
        // e.preventDefault()
        const files = e.target.files
        const data = new FormData()
        for (let i = 0; i < files.length; i++) {
            data.append('images', files[i])
        }
        axios.post('/localupload', data, {
            headers: {"Content-Type":"multipart/form-data"}
        }).then(response => {
            const {data:filenames} = response
            onChange(prev => {
                return [...prev, ...filenames];
            });
        })
    }

    return (
        <>
            <div className="flex justify-between">
                <input type="text" name="link" placeholder="Upload Images Using Link. Format:jpeg" 
                value={linkImage} onChange={e => setLinkImage(e.target.value)} />
                <button onClick={uploadImageLink} className="flex max-w-fit px-3 py-2 border shadow-md rounded-lg my-2 font-bold bg-slate-100" >ADD</button>
            </div>
            <div className="flex bg-transparent">
                <label className=" cursor-pointer flex max-w-fit px-3 py-2 border shadow-md rounded-lg my-2 bg-slate-100">
                    <input type="file" multiple className="hidden" onChange={uploadLocalImage} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <div className="font-bold">Device</div>
                </label>
                {imagesUploaded.length > 0 && imagesUploaded.map(link => (
                    <div className="m-2 p-1" key={link}>
                        {link}
                    </div>
                ))}
            </div>
        </>
    )
}