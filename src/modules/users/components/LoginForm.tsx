import { useNavigate } from "react-router-dom";
import "../../../common/assets/styles/scss/main/App.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

type SignupFormType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
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
        const response = await fetch("http://localhost:8000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (data.message === "logged") {
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
            Go to Signup
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
