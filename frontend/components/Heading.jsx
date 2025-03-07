export default function({big,small}){
    return (
        <div class="w-full m-5 justify-items-center">
            <div class="flex text-3xl font-bold m-3 text-neutral-900">{big}</div>
            <div class="flex text-xl font-light m-3 text-neutral-600">{small}</div>
        </div>
    )
}