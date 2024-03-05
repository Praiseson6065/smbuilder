import useAuth from "../context/useAuth";


const Home = () => {
    const user = useAuth().isauthenticated
    console.log(user)
    return ( <>
        
        <div className="my-4">Home</div>
        
    </> );
}
 
export default Home;