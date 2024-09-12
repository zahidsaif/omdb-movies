// MUI
import {Autocomplete, TextField} from "@mui/material";

const CustomAutocomplete = (props) => {
    const {
        inputValue,
        dropdownOptions,
        placeholder,
        autocompleteProps,
        inputFieldProps,
        onInputChange,
        onSelectChange
    } = props;

    return <Autocomplete
        {...autocompleteProps}
        sx={{
            mt: 1,
            borderRadius: "4px",
            backgroundColor: "white",
            "& .MuiAutocomplete-input": {
                padding: "0rem 0.5rem!important",
            },
        }}
        size="small"
        inputValue={inputValue}
        onChange={onSelectChange}
        options={dropdownOptions}
        renderInput={(params) => {
            const {InputProps, inputProps, ...renderProps} = params;

            return (
                <TextField
                    onChange={onInputChange}
                    placeholder={
                        !inputValue ? placeholder : null
                    }
                    InputProps={{...InputProps}}
                    inputProps={inputProps}
                    {...renderProps}
                    {...inputFieldProps}
                />
            );
        }}
    />
}

export default CustomAutocomplete