export default function Userview({userlist}){
    return (
        <div class="m-5">
            <input class="w-full border-2 rounded-sm p-2" placeholder="Search users"/>
            <Sendview/>
        </div>
    )
}

function Sendview({username}){
    return (
        <div class="flex m-5 justify-between">
            <div>Photo</div>
            <div>{username}</div>
            <button class="p-2 bg-black text-white rounded-md">Send Money</button>
        </div>
    )
}