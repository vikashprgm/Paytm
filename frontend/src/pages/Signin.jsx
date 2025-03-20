import Input from "../components/Input";
import Button from"../components/Button";
import Heading from "../components/Heading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Bottomwarning from "../components/Bottomwarning";

export function Signin(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate=useNavigate();
    return (
        <div>
            <Heading big={"Sign In"} small="Enter credentials to access your account" />
            <Input onChange={(e)=>{ setUsername(e.target.value); console.log(e.target.value) }} label={"Username"} fill={"johndoe@gmail.com"} />
            <Input onChange={(e)=>{ setPassword(e.target.value); console.log(e.target.value) }} label={"Password"} />
            
            <Button text={"Signin"} onClick={ async()=>{
                    const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password
                    });
                    localStorage.setItem("token",response.data.token);
                    navigate("/dashboard");
                }
            }/>
            
            <Bottomwarning label={"New user ?"} buttontext={"Create an account"} to={"/signup"} />
        </div>
    )
}