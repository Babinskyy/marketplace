import "../../../common/assets/styles/scss/main/App.scss";
import SignupForm from "../components/SignupForm";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

const Signup = (): JSX.Element => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="signup-container">
      <Header />

      <div className="signup-content">
        <h1>{login ? <span>Log in</span> : <span>Sign up</span>}</h1>
        {login ? (
          <LoginForm setLogin={setLogin} />
        ) : (
          <SignupForm setLogin={setLogin} />
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
