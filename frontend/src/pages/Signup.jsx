import Input from '../components/Input';
import Button from "../components/Button";
import Heading from '../components/Heading';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import Bottomwarning from '../components/Bottomwarning';

export function Signup(){
    const navigate=useNavigate();
    const [username,setUsername] = useState("");
    const [firstname,setFirstname]= useState("");
    const [lastname,setLastname]= useState("");
    const [password,setPassword]= useState("");

    return(
        <div>
            <Heading big={"Sign Up"} small={"Enter your information to create an account"}></Heading>
            
            <Input onChange={ (e)=>{setUsername(e.target.value)} } label="Email" fill="pizzatime@gmail.com"></Input>
            <Input onChange={ (e)=>{setFirstname(e.target.value)} } label="First Name" fill="Peter"></Input>
            <Input onChange={ (e)=>{setLastname(e.target.value)} } label="Last Name" fill="Parker"></Input>
            <Input onChange={ (e)=>{setPassword(e.target.value)} } label="Password"></Input>
            <Button onClick={ async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstname,
                lastname,
                password });
                  
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")}
                } text={"Signup"}></Button>
            <Bottomwarning label={"Already have an account"} buttontext={"Sign in"} to={"/signin"}></Bottomwarning>
        </div>
    )
}