import Balance from "../components/Balance";
import Userview from "../components/Userview";
import Appbar from "../components/Appbar";

export function Dashboard(){
    return (
        <div>
            <Appbar/>
            <Balance/>
            <Userview/>
        </div>
    )
}