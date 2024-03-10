"use client"


export default function DeleteButton({ id }) {
    async function deleteRecord() {
        console.log("delete clicked");
        const request = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.json();
        console.warn(response);
        alert("Record Deleted Successfully");
    }
    return (
        <button type='button' onClick={() => deleteRecord()} >Delete</button>
    )
}
