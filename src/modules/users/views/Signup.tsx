import "../../../common/assets/styles/scss/main/App.scss";
import SignupForm from "../components/SignupForm";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/store";
import { View } from "../../../store/features/ViewSlice";

type SignupType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
};

const Signup = (props: SignupType): JSX.Element => {
  const [login, setLogin] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(View("login"));
  }, []);

  return (
    <div className="signup-container">
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
      />

      <div className="signup-content">
        <h1>{login ? <span>Sign up</span> : <span>Sign in</span>}</h1>
        {login ? (
          <SignupForm setLogin={setLogin} darkTheme={props.darkTheme} />
        ) : (
          <LoginForm setLogin={setLogin} darkTheme={props.darkTheme} />
        )}
      </div>
      <Footer darkTheme={props.darkTheme} />
    </div>
  );
};
export default Signup;
