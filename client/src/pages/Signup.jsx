import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
const Signup = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if (user) {
      navigate("/profile");
    }
  },[user])

  const { handleSubmit, register } = useForm();
  
  const onSubmit = async (dataValues) => {
    console.log(dataValues);
    try {
      const data = await axios.post(
        "http://localhost:4000/signup",
        {
          ...dataValues,
        },
        { withCredentials: true }
      );
      const { success, user } = data.data;
      if (success) {
        login(user);
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        className="mt-[4em] flex justify-center w-[30%] gap-4 flex-col box-border p-6 border-teal-500 shadow-lg    rounded-lg  border-2 align-middle mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 flex-col items-start ">
          <label className="" htmlFor="name">
            Name
          </label>
          <input
            className="h-[2.5em] border-teal-400 border-[0.1em] px-2 rounded-md w-full shadow-md focus:outline-teal-700"
            type="text"
            {...register("name", { required: true })}
          />
        </div>
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
          <label className="" htmlFor="Email">
            Email
          </label>
          <input
            className="h-[2.5em] border-teal-400 border-[0.1em] px-2 rounded-md w-full shadow-md focus:outline-teal-700"
            type="email"
            {...register("email", { required: true })}
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
          value="Sign Up"
        />
      </form>
    </>
  );
};

export default Signup;
