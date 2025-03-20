import { useState } from "react";
import Heading from "../components/Heading";
import {useNavigate, useSearchParams } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

export function Sendmoney(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate=useNavigate();
    return (
        <div>
            <Heading big={"Send Money"}/>
            <Heading small={"Account Name: "+name}/>
            <Input label={"Enter Amount"} fill={"Min. $1 "} onChange={
                (e)=>{
                    setAmount(e.target.value)
                }
            }/>
            <Button onClick={
                async ()=>{
                    await axios.post("http://localhost:3000/api/v1/account/transfer", {
                        to: id,
                        amount
                    }, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    })
                    .then(navigate("/dashboard"))
                }
            } text={"Initiate Transfer"}/>
        </div>
    )
}