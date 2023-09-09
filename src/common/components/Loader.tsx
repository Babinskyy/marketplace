import "../assets/styles/scss/main/App.scss";

type LoaderType = {
  darkTheme: boolean;
};

const Loader = (props: LoaderType): JSX.Element => {
  return <div className={`loader ${props.darkTheme && "dark-theme"}`}></div>;
};

export default Loader;
