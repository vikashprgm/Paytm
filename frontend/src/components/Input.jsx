export default function Input({label,fill,onChange}){
    return (
        <div className="w-full m-3 justify-items-center">
            <div className="flex p-1">{label}</div>
            <input onChange={onChange} className="flex border-2 rounded-md p-1" placeholder={fill}/>
        </div>
    )
}