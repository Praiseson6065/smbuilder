import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../context/useAuth";

const Login = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const {isauthenticated, login } = useAuth();
  console.log(useAuth())
  
  if (isauthenticated) {
    navigate("/profile");
  }

  const handleError = (err) => {
    toast.error(err);
  };

  const handleSuccess = (msg) => {
    toast.success(msg);
  };

  const onSubmit = async (dataValues) => {
    console.log(dataValues);
    try {
      const data = await axios.post(
        "http://localhost:4000/login",
        {
          ...dataValues,
        },
        { withCredentials: true }
      );
      const { success, message, user } = data.data;
      if (success) {
        handleSuccess(message);
        login(user);
        console.log(success, message,user)
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className="mt-[10em] flex justify-center w-[30%] gap-4 flex-col box-border p-6 border-teal-500 shadow-lg    rounded-lg  border-2 align-middle mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 flex-col items-start ">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className="h-[2.5em] border-teal-400 border-[0.1em] px-2 rounded-md w-full shadow-md focus:outline-teal-700"
            type="text"
            {...register("username", { required: true })}
          />
        </div>
        <div className="flex gap-4 flex-col items-start ">
          <label htmlFor="password">Password</label>
          <input
            className="h-[2.5em] border-teal-400 border-[0.1em] px-2 rounded-md w-full shadow-md focus:outline-teal-700"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <input
          className=" bg-teal-700 text-white h-10 rounded-md"
          type="submit"
          value="Login"
        />
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
