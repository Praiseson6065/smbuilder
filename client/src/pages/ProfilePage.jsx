import useAuth from "../context/useAuth";

// import axios from "axios";
const ProfilePage = () => {
    const user = useAuth().user;
    return ( <>
    <div>Username : {user.username}</div>
    <div>Name : {user.name}</div>
    <div>Email : {user.email}</div>
    <div>Accountype : {user.accountType}</div>
    </> );
}
 
export default ProfilePage;