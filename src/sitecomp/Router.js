import { BrowserRouter, Route, Routes } from "react-router-dom"
import Employee from "./Employee";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import AddEmployee from "./AddEmployee";

const Router = () =>{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/myfirstreact" element={<Home/>}/>
                    <Route exact path = "/myfirstreact/" element={<Home/>}/>
                    <Route exact path = "/Employee" element={<Employee/>}/>
                    <Route exact path = "/AddEmployee" element={<AddEmployee/>}/>
                    <Route exact path = "/Edit/:id" element={<AddEmployee/>}/>
                    <Route exact path = "*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;