import SearchIcon from "@mui/icons-material/Search";
import "../../common/assets/styles/scss/main/App.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  inputValueSet,
  currentInputValueSet,
} from "../../store/features/FiltersSlice";

type SearchbarProps = {
  inputValue?: string;
  setCurrentInputValue?: React.Dispatch<React.SetStateAction<string>>;
  currentInputValue?: string;
  darkTheme: boolean;
};

const Searchbar = (props: SearchbarProps): JSX.Element => {
  const [showClearX, setShowClearX] = useState<boolean>(false);
  const appSelectorState = useAppSelector((state) => state.filters.inputValue);
  const currentInputState = useAppSelector(
    (state) => state.filters.currentInputValue
  );
  const handleShowX = () => {
    setShowClearX(true);
  };
  const handleHideX = () => {
    setShowClearX(false);
  };
  useEffect(() => {
    if (appSelectorState === "") {
      handleHideX();
    }
  }, [appSelectorState]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
        placeholder="Search Offers"
        className={`searchbar-input ${props.darkTheme && "dark-theme"}`}
        value={currentInputState}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          handleShowX();
          dispatch(currentInputValueSet(e.currentTarget.value));
        }}
      />

      <div
        className={`x-cancel-input ${props.darkTheme && "dark-theme"}`}
        onClick={() => {
          handleHideX();

          dispatch(inputValueSet(""));
          dispatch(currentInputValueSet(""));
        }}
      >
        <ClearIcon
          sx={{
            fontSize: 35,
            opacity: 0.7,
          }}
          className={
            showClearX ? `visible ${props.darkTheme && "dark-theme"}` : ""
          }
        />
      </div>

      <button
        className={`search-button ${props.darkTheme && "dark-theme"}`}
        onClick={() => {
          dispatch(inputValueSet(currentInputState));
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
