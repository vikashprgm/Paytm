export default function button({text,onClick}){
    return (
        <div className="flex justify-center w-full">
            <button onClick={onClick} className="bg-blue-500 p-2 m-3 rounded-md text-amber-50 cursor-pointer">{text}</button>
        </div>
    )
}