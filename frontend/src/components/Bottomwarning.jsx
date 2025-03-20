import { Link } from "react-router-dom";

export default function Bottomwarning({label,buttontext,to}){
    return (
        <div className="text-sm flex justify-center">
            <div>{label}</div>
            <Link className="pointer font-bold underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
        </div>
    )
}