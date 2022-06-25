import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboad = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className="text-3xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboad">My Appointment</Link>
          </li>
          <li>
            <Link to="/dashboad/review">My Reviews</Link>
          </li>
          <li>
            <Link to="/dashboad/history">My History</Link>
          </li>
         { admin && <>
          <li>
            <Link to="/dashboad/users">All users</Link>
          </li> 
          <li>
            <Link to="/dashboad/addDoctor">Add a doctor</Link>
          </li> 
          <li>
            <Link to="/dashboad/manageDoctor">Manage doctors</Link>
          </li>
         </>}
        </ul>
      </div>
    </div>
  );
};

export default Dashboad;
