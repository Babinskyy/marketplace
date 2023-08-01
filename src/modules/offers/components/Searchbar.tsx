import SearchIcon from "@mui/icons-material/Search";
import "../../../common/assets/styles/scss/App.scss";
import { TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";

type SearchbarProps = {
  inputValue?: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
};

const Searchbar = (props: SearchbarProps): JSX.Element => {
  const [showClearX, setShowClearX] = useState<boolean>(false);
  const [currentInputValue, setCurrentInputValue] = useState<string>("");

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

  return (
    <form
      className="searchbar-container"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="icon-holder">
        <SearchIcon sx={{ fontSize: 35, opacity: 0.5 }} />
      </div>
      <input
        type="search"
        name="search"
        placeholder="Search for offers"
        className="searchbar-input"
        value={currentInputValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          handleShowX();
          setCurrentInputValue(e.currentTarget.value);
        }}
      />
      {showClearX && (
        <div
          className="x-cancel-input"
          onClick={() => {
            handleHideX();
            if (props.setInputValue) {
              props.setInputValue("");
            }
            setCurrentInputValue("");
          }}
        >
          <ClearIcon sx={{ fontSize: 35, opacity: 0.7 }} />
        </div>
      )}

      <button
        className="search-button"
        onClick={() => {
          if (props.setInputValue) {
            props.setInputValue(currentInputValue);
          }
        }}
      >
        <span>Search</span>
        <SearchIcon sx={{ fontSize: 28 }} id="search-icon" />
      </button>
    </form>
  );
};

export default Searchbar;
