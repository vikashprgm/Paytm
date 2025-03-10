import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import {Dashboard} from "./pages/Dashboard"
import { Sendmoney } from "./pages/Sendmoney";

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/send" element={<Sendmoney/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App