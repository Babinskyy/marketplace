import SearchIcon from "@mui/icons-material/Search";
import "../../common/assets/styles/scss/main/App.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  inputValueSet,
  currentInputValueSet,
  categoryFilterValueSet,
  countryFilterValueSet,
} from "../../store/features/FiltersSlice";
import { Button } from "@mui/material";

type SearchbarProps = {
  inputValue?: string;
  setCurrentInputValue?: React.Dispatch<React.SetStateAction<string>>;
  currentInputValue?: string;
  darkTheme: boolean;
};

const Searchbar = (props: SearchbarProps): JSX.Element => {
  const [showClearX, setShowClearX] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inputState = useAppSelector((state) => state.filters.inputValue);
  const currentInputState = useAppSelector((state) => state.filters.currentInputValue);
  const categoryFilterValue = useAppSelector(
    (state) => state.filters.categoryFilterValue
  );
  const countryFilterValue = useAppSelector((state) => state.filters.countryFilterValue);
  useEffect(() => {
    if (inputState === "") {
      setShowClearX(false);
    } else {
      setShowClearX(true);
    }
  }, [inputState]);

  return (
    <div className="searchbar-paragraph">
      <Button
        variant="contained"
        className={`clear-all-filters-button ${
          (inputState && categoryFilterValue) ||
          (inputState && countryFilterValue) ||
          (countryFilterValue && categoryFilterValue)
            ? "visible"
            : ""
        }`}
        onClick={() => {
          dispatch(inputValueSet(""));
          dispatch(currentInputValueSet(""));
          dispatch(categoryFilterValueSet(""));
          dispatch(countryFilterValueSet(""));
        }}
      >
        Clear all filters
      </Button>
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
          placeholder="Search Offers"
          className="searchbar-input"
          value={currentInputState}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setShowClearX(true);
            dispatch(currentInputValueSet(e.currentTarget.value));
          }}
        />

        <div
          className="x-cancel-input"
          onClick={() => {
            setShowClearX(false);
            dispatch(inputValueSet(""));
            dispatch(currentInputValueSet(""));
          }}
        >
          <ClearIcon
            sx={{
              fontSize: 35,
              opacity: 0.7,
            }}
            className={showClearX ? "visible" : ""}
          />
        </div>

        <button
          className="search-button"
          onClick={() => {
            dispatch(inputValueSet(currentInputState));
            navigate("/offers/all");
          }}
        >
          <span>Search</span>
          <SearchIcon sx={{ fontSize: 28 }} id="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
