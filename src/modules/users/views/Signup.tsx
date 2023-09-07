import "../../../common/assets/styles/scss/main/App.scss";
import SignupForm from "../components/SignupForm";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";
import LoginForm from "../components/LoginForm";
import { useState } from "react";

type SignupType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const Signup = (props: SignupType): JSX.Element => {
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div className="signup-container">
      <Header setOpenOfferModal={props.setOpenOfferModal} />

      <div className="signup-content">
        <h1>{login ? <span>Sign up</span> : <span>Log in</span>}</h1>
        {login ? (
          <SignupForm setLogin={setLogin} />
        ) : (
          <LoginForm setLogin={setLogin} setIsLogged={props.setIsLogged}/>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Signup;
