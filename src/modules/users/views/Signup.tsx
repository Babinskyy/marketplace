import "../../../common/assets/styles/scss/main/App.scss";
import SignupForm from "../components/SignupForm";
import Header from "../../../common/components/Header";
import Footer from "../../../common/components/Footer";
import LoginForm from "../components/LoginForm";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { LoginViewTrue } from "../../../store/features/LoginViewSlice";

type SignupType = {
  setOpenOfferModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
  isLoginView: boolean;
  setIsLoginView: React.Dispatch<React.SetStateAction<boolean>>;
};

const Signup = (props: SignupType): JSX.Element => {
  const [login, setLogin] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // props.setIsLoginView(true);
    dispatch(LoginViewTrue());
  }, []);

  const appSelectorState = useAppSelector(
    (state) => state.isLoginView.isLoginView
  );
  console.log(appSelectorState);
  return (
    <div className={`signup-container ${props.darkTheme && "dark-theme"}`}>
      <Header
        setOpenOfferModal={props.setOpenOfferModal}
        setDarkTheme={props.setDarkTheme}
        darkTheme={props.darkTheme}
        isLoginView={props.isLoginView}
      />

      <div className="signup-content">
        <h1 className={`${props.darkTheme && "dark-theme"}`}>
          {login ? <span>Sign up</span> : <span>Log in</span>}
        </h1>
        {login ? (
          <SignupForm setLogin={setLogin} darkTheme={props.darkTheme} />
        ) : (
          <LoginForm
            setLogin={setLogin}
            darkTheme={props.darkTheme}
            setIsLoginView={props.setIsLoginView}
          />
        )}
      </div>
      <Footer darkTheme={props.darkTheme} />
    </div>
  );
};
export default Signup;
