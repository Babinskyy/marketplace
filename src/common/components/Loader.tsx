import "../assets/styles/scss/main/App.scss";

type LoaderType = {
  darkTheme: boolean;
};

const Loader = (props: LoaderType): JSX.Element => {
  return <div className="loader"></div>;
};

export default Loader;
