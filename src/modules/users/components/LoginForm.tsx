import { useNavigate } from "react-router-dom";
import "../../../common/assets/styles/scss/main/App.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BASE_URL } from "../../../common/config/env-variable";

type SignupFormType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
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
  const onSubmit = handleSubmit((values) => {
    setResponse("");
    const login = async () => {
      try {
        const response = await fetch(`${BASE_URL}users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (data.message === "logged") {
          const user = { id: data.user_id, username: data.username };
          localStorage.setItem("user", JSON.stringify(user));

          // localStorage.setItem("id", data.user_id);
          // localStorage.setItem("username", data.username);
          navigate("/");
        } else setResponse(data.message);
      } catch (err) {
        console.error(err);
      }
    };

    login();
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
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
            Go to Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
