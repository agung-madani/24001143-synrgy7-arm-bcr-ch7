import "../index.css";
import { useForm, Controller } from "react-hook-form";
import { CarsContext, loginData } from "../context/CarsContext";
import { useContext } from "react";
import axios from "axios";

const LoginFormSection = () => {
  const { errorMessage, setErrorMessage } = useContext(CarsContext);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: loginData) => {
    {
      axios
        .post("http://localhost:3030/login", data)
        .then((response) => {
          localStorage.setItem("tokenBinar", response.data.token);
          window.location.href = "/cars-management";
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage(error.response.data.message);
        });
    }
    reset();
  };
  return (
    <div className="flex-1 flex justify-center items-center bg-neutral-01">
      <div className="max-w-md md:max-w-lg w-full md:p-8">
        <button className="text-darkblue-01 bg-darkblue-01 p-2 mb-6">
          Binar Rental Car
        </button>
        <h2 className="text-2xl font-bold text-start mb-6">
          Welcome, Admin BCR
        </h2>
        {errorMessage && (
          <div className="bg-alrt-red bg-opacity-10 text-alrt-red w-full py-4 px-6 mb-6">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-light text-neutral-700 mb-3"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-light text-neutral-700 mb-3"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-darkblue-04 text-white rounded-sm hover:bg-darkblue-05 transition duration-200 font-bold text-sm"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormSection;
