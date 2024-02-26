// import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
    const user = useAuth();
    
    return ( <>
        <nav className="sticky flex justify-between px-24 w-full py-4 bg-teal-50 backdrop-blur-md border-b-2 border-teal-100 ">
            <div className="">
                SMClone
            </div>
            <div className="flex justify-between gap-4">
            <Link to="/"> <div>Home</div></Link>
                {/* <div>Explore</div>
                <div>Dm</div> */}
                {user.user ? <Link to="/profile"> <div>Profile</div></Link>:<><Link to="/login"> <div>Login</div></Link> <Link to="/signup"> <div>Signup</div></Link></>}
               
            </div>
        </nav>
    </> );
}
 
export default Navbar;