import SearchIcon from "@mui/icons-material/Search";
import "../App.scss";
import { TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";

const Searchbar = (): JSX.Element => {
  const [showClearX, setShowClearX] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleShowX = () => {
    setShowClearX(true);
  };
  const handleHideX = () => {
    setShowClearX(false);
  };
  useEffect(() => {
    if (inputValue === "") {
      handleHideX();
    }
  }, [inputValue]);

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
        value={inputValue}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          handleShowX();
          setInputValue(e.currentTarget.value);
        }}
      />
      {showClearX && (
        <div
          className="x-cancel-input"
          onClick={() => {
            handleHideX();
            setInputValue("");
          }}
        >
          <ClearIcon sx={{ fontSize: 35, opacity: 0.7 }} />
        </div>
      )}

      <button className="search-button">
        <span>Search</span>
        <SearchIcon sx={{ fontSize: 28 }} id="search-icon" />
      </button>
    </form>
  );
};

export default Searchbar;
