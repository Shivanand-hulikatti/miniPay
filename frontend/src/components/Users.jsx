import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("https://minipayb.onrender.com/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen p-4 rounded-lg shadow-md">
            <div className="flex justify-around">
            <div className="font-bold mt-6 text-lg text-white text-center">
                Users
            </div>
            <div className="my-4 flex justify-center">
                <input 
                    onChange={(e) => setFilter(e.target.value)} 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full max-w-md px-4 py-2 border rounded-lg border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            </div>
            <div className="grid gap-4">
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    )
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-blue-500 flex items-center justify-center text-xl text-white">
                    {user.firstName[0]}
                </div>
                <div className="ml-4">
                    <div className="text-gray-800 font-medium">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <Button 
                onClick={() => navigate("/send?id=" + user._id + "&name=" + user.firstName)} 
                label={"Send Money"} 
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
            />
        </div>
    )
}

export default Users
