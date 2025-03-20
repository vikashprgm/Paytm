export default function Balance({amount}){
    return (
        <div className="m-5 flex font-medium">
            <div className="font-medium text-xl">Your Balance is</div>
            <div className="ml-2 font-bold text-xl">${amount}</div>
        </div>
    )
}