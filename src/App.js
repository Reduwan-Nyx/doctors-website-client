import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import Dashboad from "./Pages/Dashboad/Dashboad";
import MyAppointments from "./Pages/Dashboad/MyAppointments";
import MyReview from "./Pages/Dashboad/MyReview";
import MyHistory from "./Pages/Dashboad/MyHistory";
import Users from "./Pages/Dashboad/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboad/AddDoctor";
import MangeDoctors from "./Pages/Dashboad/MangeDoctors";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />  
        <Route path="/appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} /> 
        
        <Route path="/dashboad" element={<RequireAuth>
          <Dashboad />
        </RequireAuth>} >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route path="users" element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route><Route path="manageDoctor" element={<RequireAdmin>
            <MangeDoctors></MangeDoctors>
          </RequireAdmin>}></Route>
          </Route> 
        
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
