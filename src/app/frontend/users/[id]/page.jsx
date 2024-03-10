"use client"
import { useEffect, useState } from "react";


export default function Page({ params }) {
    const id = params.id;

    // FETCH SINGLE USER
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    async function fetchSingleUser(id) {
        const request = await fetch(`http://localhost:3000/api/users/${id}`);
        const response = await request.json();
        setFname(response.data.fname);
        setLname(response.data.lname);
        setEmail(response.data.email);
    }
    useEffect(() => {
        fetchSingleUser(id);
    }, [id])


    // HANDLE SUBMIT 
    const [message, setMessage] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();
        const request = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fname, lname, email })
        });
        const response = await request.json();
        console.log(response);
        if (response.success) {
            setMessage("Data Updated Successfully");
        }
        else {
            setMessage("");
        }
    }
    return (
        <div className={`p-10 w-full`}>
            <div className="flex flex-nowrap items-center gap-2">
                <h1 className='text-xl'>Update User : </h1>
                <h1 className='px-4 py-1 tracking-[1px] text-sm rounded-md bg-blue-500 text-white'>PUT</h1>
            </div>
            <div className="my-10 border-[1.5px] border-slate-500 bg-slate-100 rounded-md p-5  w-full">
                <form action="" onSubmit={handleSubmit}>
                    <input required value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder='Enter First Name' className='border-[1.6px] w-full rounded-md my-3 p-3' />
                    <br />
                    <input required value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder='Enter Last Name' className='border-[1.6px] w-full rounded-md my-3 p-3' />
                    <br />
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email Address' className='border-[1.6px] w-full rounded-md my-3 p-3' />
                    <button type="submit" className='px-3 py-2 bg-slate-900 text-white rounded-md text-sm' >Submit</button>
                </form>
            </div>
            <div className="">
                Message :
                {message !== ""
                    &&
                    <p>{message}</p>
                }
            </div>
        </div>
    )
}
