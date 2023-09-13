import { useNavigate } from "react-router-dom";
import "../../../common/assets/styles/scss/main/App.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Cookies from 'universal-cookie';

type SignupFormType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const LoginForm = (props: SignupFormType): JSX.Element => {
  const [response, setResponse] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const cookies = new Cookies();
  const onSubmit = handleSubmit((values) => {
    setResponse("");
    const login = async () => {
      const url = "https://marketplaceserver-2777642eddf2.herokuapp.com/"
      // const url = "http://localhost:8000/"
      try {
        const response = await fetch(`${url}users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(values),
        });
        const data = await response.json();
        console.log(data);
        if (data.message === "logged") {
          cookies.set('AuthenticationToken', data.token);
          navigate("/");
          props.setIsLogged(true);
        } else setResponse(data.message);
      } catch (err) {
        console.error(err);
      }
    };

    login();
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
            Login
          </button>

          <button
            type="submit"
            id="signup-submit"
            onClick={() => props.setLogin((prev) => !prev)}
          >
            Go to Signup
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
