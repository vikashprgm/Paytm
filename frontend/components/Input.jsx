export default function Input({fill,label}){
    return (
        <div class="justify-self-center">
            <div class="p-1">{label}</div>
            <input class="border-2 rounded-md p-1 mb-3" placeholder={fill}/>
        </div>
    )
}