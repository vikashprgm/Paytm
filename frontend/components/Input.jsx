export default function Input({label,fill}){
    return (
        <div class="w-full m-3 justify-items-center">
            <div class="flex p-1">{label}</div>
            <input class="flex border-2 rounded-md p-1" placeholder={fill}/>
        </div>
    )
}