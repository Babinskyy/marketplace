import { useState } from "react";
import "../../../common/assets/styles/scss/main/App.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../common/config/env-variable";

type SignupFormType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const SignupForm = (props: SignupFormType): JSX.Element => {
  const [response, setResponse] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((values) => {
    setResponse("");
    const signup = async () => {
<<<<<<< HEAD
      const url = "https://marketplaceserver-2777642eddf2.herokuapp.com/"
      // const url = "http://localhost:8000/"
=======

>>>>>>> c84d3743cf245fe9ff4b115b461cb723acb73275
      try {
        const response = await fetch(`${BASE_URL}users/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(values),
        });
        const data = await response.json();
        setResponse(data);
      } catch (err) {
        console.error(err);
      }
    };

    signup();
    reset();
  });
  return (
    <form onSubmit={onSubmit} className={`${props.darkTheme && "dark-theme"}`}>
      <div className="form-content">
        <p className="response">{response && response}</p>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          placeholder="username"
        />
        <div className="error-container">
          {errors.username && <p className="error">Enter username.</p>}
        </div>

        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          placeholder="password"
        />
        <div className="error-container">
          {errors.password && <p className="error">Enter password.</p>}
        </div>
        <div className="buttons-panel">
          <button type="submit" id="login-submit">
            Sign up
          </button>
          <button
            type="submit"
            id="signup-submit"
            onClick={() => props.setLogin((prev) => !prev)}
          >
            Go to Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
