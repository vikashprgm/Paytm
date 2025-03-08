export default function button({text,onClick}){
    return (
        <div class="flex justify-center w-full m-5">
            <button onClick={onClick} class="bg-blue-500 p-2 m-3 rounded-md text-amber-50">{text}</button>
        </div>
    )
}