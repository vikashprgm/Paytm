export default function({big,small}){
    return (
        <div className="m-5 justify-items-center">
            <div className="flex text-3xl font-bold capitalize m-3 text-neutral-900">{big}</div>
            <div className="flex text-xl font-light capitalize m-3 text-neutral-600">{small}</div>
        </div>
    )
}