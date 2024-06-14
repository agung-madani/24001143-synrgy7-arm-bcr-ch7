import "../index.css";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { CarsContext } from "../context/CarsContext";
import { useContext } from "react";

const LoginPage: React.FC = () => {
  const { errorMessage, setErrorMessage } = useContext(CarsContext);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
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
    <div className="flex h-screen">
      {/* Image Section */}
      <div className="hidden md:block md:w-2/3 relative bg-darkblue-05">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src="https://s3-alpha-sig.figma.com/img/293b/474b/7604a9eda79ef119b2c8196e3c8773d3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNK22pKnaMKHqaFcFj9~3O1XPtJ65RjaVk7LG7ycNy1CZcJbQilf6L34GWhZ4~J2roJ3Y1amEhKAeKnmQH5gtNBa4y6nGT-SUWlicCOrxcM80pbDrjS4yZn-S7ZZ~YFrzYzDZAbucYqQBJv6qWKG-6K3u4NGpU5D8XW8FIIyvogxEpOdwck3uhj3pCS6R8QZhXvI2Ema9A3H4AqveYewWGbP70BVMyGCSWEPt3jaJC4hHnpf1r5NI541~asr6AJcvaRGAS0PDTFflGbVaZG6N6y2xokV-hqRg1OptWsqpSeXjtvOKYY690sENiNMtNb2BDC4tzTfLTPpXerr2Nt9TQ__"
          alt="Background"
        />
      </div>

      {/* Login Form Section */}
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
    </div>
  );
};

export default LoginPage;
