import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";

export default function SelectComponent({
  optionsArray,
  onSelectionChange,
}: {
  optionsArray: string[];
  onSelectionChange: (value: string) => void;
}) {
  const handleSelectionChange = (event: any, value: any) => {
    onSelectionChange(value);
  };

  return (
    <Autocomplete
      className="w-[19rem] md:w-96"
      freeSolo
      id="select-component"
      disableClearable
      options={optionsArray}
      onChange={handleSelectionChange}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
      )}
    />
  );
}
