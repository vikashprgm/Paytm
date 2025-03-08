import Input from "../components/Input";
import Button from"../components/Button";
import Heading from "../components/Heading";

export function Signin(){
    return (
        <div>
            <Heading big={"Sign In"} small="Enter credentials to access your account"></Heading>
            <Input label={"Username"} fill={"johndoe@gmail.com"}></Input>
            <Input label={"Password"}></Input>
            <Button text={"Signin"}></Button>
        </div>
    )
}