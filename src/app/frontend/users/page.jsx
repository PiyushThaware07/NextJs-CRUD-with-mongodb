import Link from "next/link";
import DeleteButton from "./DeleteButton";

// CONNECT BACKEND WOTH FRONTEND
async function getUsers() {
  // no-cache is used to prevent hard refresh in browser.
  const request = await fetch("http://localhost:3000/api/users", { cache: "no-cache" });
  const response = await request.json();
  return response.data;
}

export default async function Page() {
  const data = await getUsers();
  // console.log("Frontend : ", data);
  return (
    <div>
      <div className="flex flex-nowrap items-center gap-1">
        <button className='px-4 py-1 bg-green-500 text-white rounded-md'>GET : </button>
        <h1>All Users</h1>
      </div>
      <table className='mt-5'>
        <thead>
          <tr className='bg-slate-400'>
            <td className='border-2 border-slate-900 px-5 py-2'>Id</td>
            <td className='border-2 border-slate-900 px-5 py-2'>Fname</td>
            <td className='border-2 border-slate-900 px-5 py-2'>Lname</td>
            <td className='border-2 border-slate-900 px-5 py-2'>Email</td>
            <td className='border-2 border-slate-900 px-5 py-2'>Edit</td>
            <td className='border-2 border-slate-900 px-5 py-2'>Delete</td>
          </tr>
        </thead>
        {data.length !== 0
          &&
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className=''>
                <td className='border-2 border-slate-900 px-5 py-2'>{index + 1}</td>
                <td className='border-2 border-slate-900 px-5 py-2'>{item.fname}</td>
                <td className='border-2 border-slate-900 px-5 py-2'>{item.lname}</td>
                <td className='border-2 border-slate-900 px-5 py-2'>{item.email}</td>
                <td className='border-2 border-slate-900 px-5 py-2'><Link href={`/frontend/users/${item._id}`}>Edit</Link></td>
                <td className='border-2 border-slate-900 px-5 py-2'><DeleteButton id={item._id} /></td>
              </tr>
            ))}
          </tbody>}
      </table>
    </div>
  )
}
