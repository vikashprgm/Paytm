import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Appbar({firstname}){
    const navigate=useNavigate();
    return (
        <div className="flex justify-between m-5">
            <div className="text-3xl font-bold">Payments App</div>
            <div className="flex justify-center">
                <div className="flex ml-2 mt-2 mb-2 items-center">Hello</div>
                <div className="flex ml-1.5 mr-2 mt-2 mb-2 items-center font-extrabold capitalize">{firstname}!</div>
                <Button onClick={
                ()=>{
                    localStorage.clear();
                    navigate("/signin")
                }
            } text={"Logout"}></Button>
            </div>
        </div>
    )
}