import { useNavigate } from "react-router-dom";
import "../../../common/assets/styles/scss/main/App.scss";
import { useForm } from "react-hook-form";

const Login = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <h1>Log in</h1>
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
          <button type="submit" id="submit">
            Login
          </button>
          <button type="submit" id="submit" onClick={() => navigate("/signup")}>
            Go to Signup
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
