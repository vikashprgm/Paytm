import Input from '../../components/Input';
import Button from "../../components/Button";
import Heading from '../../components/Heading';

export function Signup(){
    return(
        <div>
            <Heading big={"Sign Up"} small={"Enter your information to create an account"}></Heading>
            <Input label="First Name" fill="Peter"></Input>
            <Input label="Last Name" fill="Parker"></Input>
            <Input label="Email" fill="pizzatime@gmail.com"></Input>
            <Input label="Password"></Input>
            <Button text={"Signup"}></Button>
        </div>
    )
}
