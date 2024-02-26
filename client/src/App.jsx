import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/Authcontext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup/>}/>
          <Route
            path="/profile"
            element={<PrivateRoute><ProfilePage /></PrivateRoute>}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
