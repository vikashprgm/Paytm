import Balance from "../components/Balance";
import Userview from "../components/Userview";
import Appbar from "../components/Appbar";
import axios from "axios";
import { useEffect, useState } from "react";

export function Dashboard(){
    const [balance, setBalance] = useState(0);
    const [user, setuser]= useState("");
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then(response => {
            setBalance(response.data.balance);
            setuser(response.data.firstname);
        })}, []);

    return (
        <div>
            <Appbar firstname={user}/>
            <Balance amount={balance}/>
            <Userview/>
        </div>
    )
}