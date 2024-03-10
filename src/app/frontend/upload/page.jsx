"use client"

import React, { useState } from 'react';

export default function Page() {
    const [img, setImg] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', img);

        try {
            const response = await fetch("http://localhost:3000/api/image", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                console.log("Image uploaded successfully");
                // Handle success if needed
            } else {
                console.error("Failed to upload image");
                // Handle failure if needed
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            // Handle error if needed
        }
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            setImg(file);
        }
    }

    return (
        <div className='p-5'>
            <h1 className='text-xl font-semibold'>Upload Image</h1>
            <form onSubmit={handleSubmit} className='my-5' >
                <input type="file" onChange={handleFileChange} name='file' className='border-[1.4px] border-slate-200 p-5 rounded-md text-sm' />
                <br /> <br />
                <button type='submit' className='text-sm font-medium bg-slate-900 px-4 py-2 rounded-md text-white'>Upload</button>
            </form>
        </div>
    )
}
