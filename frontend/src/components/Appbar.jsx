export default function Appbar({userid}){
    return (
        <div class="flex justify-between m-5">
            <div class="text-3xl font-bold">Payments App</div>
            <div class="flex">
                <div class="m-2">Hello {userid}</div>
                <div class="m-2">Photo</div>
            </div>
        </div>
    )
}