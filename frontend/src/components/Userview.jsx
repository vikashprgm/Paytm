import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Userview() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user);
            })
            .catch(error => console.error("Error fetching users:", error));
    }, [filter]);

    return (
        <div className="m-5">
            <div>
                <input onChange={
                    (e) => setFilter(e.target.value)
                } 
                className="w-full border-2 rounded-sm p-2"placeholder="Search users"/>
            </div>
            <div>
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </div>
    );
}

function User({user}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between m-4">
            <div className="flex">
                {/* logo */}
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 capitalize">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user?.firstname?.[0] || ""}
                    </div>
                </div>

                <div className="flex flex-col justify-center h-full capitalize">
                    <div>
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <button onClick={() => 
                    navigate(`/send?id=${user._id}&name=${user.firstname}`)}
                    className="px-4 py-2 bg-black text-white rounded-md cursor-pointer">Send Money</button>
            </div>
        </div>
    );
}
