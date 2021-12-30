import { Route, Routes } from "react-router";
import react from "react";
import HomePage from "../HomePage/HomePage.components";
import Parent from "../Parent/Parent.components";
import Student from "../Student/Student.components";
import Teacher from "../Teacher/Teacher.components";

const Routing =()=>{
return(
    <div>
    <h1>showw</h1>
    <Routes>
    <Route exact path='/' element={<HomePage/>}/>
    <Route  path="/Student" element={<Student/>}/>
    <Route path='/Teacher' element={<Teacher/>}/>
    <Route path='/Parent' element={<Parent/>}/>
</Routes>
</div>
)
}
export default Routing;