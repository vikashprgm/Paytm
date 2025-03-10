export default function Balance({balance}){
    return (
        <div class="m-5 flex font-medium">
            <div class="font-medium text-xl">Your Balance is</div>
            <div class="ml-2 font-bold text-xl">${balance}</div>
        </div>
    )
}