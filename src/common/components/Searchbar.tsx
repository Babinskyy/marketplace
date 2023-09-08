import SearchIcon from "@mui/icons-material/Search";
import "../../common/assets/styles/scss/main/App.scss";
import { TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type SearchbarProps = {
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  setCurrentInputValue?: React.Dispatch<React.SetStateAction<string>>;
  currentInputValue?: string;
  darkTheme: boolean;
};

const Searchbar = (props: SearchbarProps): JSX.Element => {
  const [showClearX, setShowClearX] = useState<boolean>(false);

  const handleShowX = () => {
    setShowClearX(true);
  };
  const handleHideX = () => {
    setShowClearX(false);
  };
  useEffect(() => {
    if (props.inputValue === "") {
      handleHideX();
    }
  }, [props.inputValue]);

  const navigate = useNavigate();

  return (
    <form
      className={`searchbar-container ${props.darkTheme && "dark-theme"}`}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={`icon-holder ${props.darkTheme && "dark-theme"}`}>
        <SearchIcon sx={{ fontSize: 35, opacity: 0.5 }} />
      </div>
      <input
        type="search"
        name="search"
        placeholder="Search for offers"
        className={`searchbar-input ${props.darkTheme && "dark-theme"}`}
        value={props.currentInputValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          handleShowX();
          if (props.setCurrentInputValue) {
            props.setCurrentInputValue(e.currentTarget.value);
          }
        }}
      />

      <div
        className={`x-cancel-input ${props.darkTheme && "dark-theme"}`}
        onClick={() => {
          handleHideX();
          if (props.setInputValue) {
            props.setInputValue("");
          }
          if (props.setCurrentInputValue) {
            props.setCurrentInputValue("");
          }
        }}
      >
        <ClearIcon
          sx={{
            fontSize: 35,
            opacity: 0.7,
          }}
          className={showClearX ? `visible ${props.darkTheme && "dark-theme"}` : ""}
        />
      </div>

      <button
        className={`search-button ${props.darkTheme && "dark-theme"}`}
        onClick={() => {
          if (props.setInputValue) {
            if (props.currentInputValue) {
              props.setInputValue(props.currentInputValue);
            }
          }
          navigate("/");
        }}
      >
        <span>Search</span>
        <SearchIcon sx={{ fontSize: 28 }} id="search-icon" />
      </button>
    </form>
  );
};

export default Searchbar;
