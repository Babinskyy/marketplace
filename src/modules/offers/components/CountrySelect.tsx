import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { countryFilterValueSet } from "../../../store/features/FiltersSlice";

type CountrySelectType = {
  darkTheme: boolean;
};

type countriesType = {
  code: string;
  name: string;
  value: string;
};

const countries: countriesType[] = [
  { code: "fr", name: "France", value: "France" },
  { code: "de", name: "Germany", value: "Germany" },
  { code: "gb", name: "Great Britain", value: "Great" },
  { code: "es", name: "Spain", value: "Spain" },
  { code: "pl", name: "Poland", value: "Poland" },
  { code: "it", name: "Italy", value: "Italy" },
  { code: "ch", name: "Switzerland", value: "Switzerland" },
  { code: "at", name: "Austria", value: "Austria" },
  { code: "nl", name: "Netherlands", value: "Netherlands" },
];

const CountrySelect = (props: CountrySelectType) => {
  const countryFilterValue = useAppSelector(
    (state) => state.filters.countryFilterValue
  );
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(countryFilterValueSet(event.target.value));
  };

  return (
    <div className="custom-select-container">
      <Button
        variant="contained"
        className={`clear-category ${countryFilterValue ? "visible" : ""} ${
          props.darkTheme ? "dark-theme" : ""
        }`}
        onClick={() => dispatch(countryFilterValueSet(""))}
      >
        Clear country
      </Button>
      <FormControl
        className={`${props.darkTheme ? "dark-theme" : ""} custom-select`}
      >
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          name="country"
          sx={{
            borderRadius: "10px",
            backgroundColor: props.darkTheme ? "rgb(68, 68, 68)" : "",
          }}
          labelId="country-label"
          id="country-select"
          value={countryFilterValue}
          label="Country"
          onChange={handleChange}
        >
          {countries.map((e) => {
            return (
              <MenuItem value={`${e.value}`}>
                <img
                  loading="lazy"
                  width="25"
                  src={`https://flagcdn.com/w20/${e.code}.png`}
                  alt="flag"
                  style={{ marginRight: "10px" }}
                />
                <span className="country-name">{e.name}</span>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
export default CountrySelect;
