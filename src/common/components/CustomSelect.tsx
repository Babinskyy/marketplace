import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Category } from "../types/Types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const countries: readonly Category[] = [
  {
    id: 1,
    url: "",
    name: "cars",
  },
  {
    id: 2,
    url: "",
    name: "cars",
  },
  {
    id: 3,
    url: "",
    name: "cars",
  },
  {
    id: 4,
    url: "",
    name: "cars",
  },
  //   { code: "VN", label: "Vietnam", phone: "84" },
  //   { code: "VU", label: "Vanuatu", phone: "678" },
];

type CustomSelectType = {
  darkTheme: boolean;
  categories: Category[] | undefined;
};

const CustomSelect = (props: CustomSelectType) => {
  return (
    <FormControl id="custom-select">
      <InputLabel id="category-label" sx={{ marginTop: "10px" }}>
        Category
      </InputLabel>
      <Select
        // error={errors.category ? true : false}
        name="category"
        sx={{ marginTop: "10px" }}
        labelId="category-label"
        id="category-select"
        // value={selectedCategoryId?.toString() || ""}
        label="Category"
        // onChange={handleCategoryChange}
      >
        {props.categories?.map((e, i) => {
          return (
            <MenuItem value={e.id} key={i + 1}>
              <span className="category-name">{e.name}</span>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;
