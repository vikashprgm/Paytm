import Input from '../../components/Input';

export function Signup(){
    return(
        <div className='justify-self-center w-md rounded-4xl bg-gray-100 p-5'>
            <Input label="First Name" fill="Peter"></Input>
            <Input label="Last Name" fill="Parker"></Input>
            <Input label="Email" fill="pizzatime@gmail.com"></Input>
            <Input label="Password" fill="12345678"></Input>
        </div>
    )
}
