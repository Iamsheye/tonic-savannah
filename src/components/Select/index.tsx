import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import type { SelectProps } from "@mui/material/Select";

type CustomSelectProps = SelectProps & {
  labelName: string;
  items: Array<{ label: string; value: string }>;
};

const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  width: "100%",
  borderRadius: "12px",
  overflow: "hidden",

  ".MuiSelect-select": {
    width: "100%",
    minWidth: "108px",
    background: "#fff",
    padding: "11px 0 12px 16px",
  },

  "& .MuiInputBase-root": {
    borderRadius: "12px !important",
  },

  "&-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
    border: "1px solid #E2E2EA",
  },
}));

const CustomSelect = (props: CustomSelectProps) => {
  return (
    <FormControl
      sx={{
        flexGrow: { xs: 1, md: "inherit" },
      }}
    >
      <InputLabel
        id={props.labelId}
        sx={{
          top: "-5px",
          fontSize: "0.875rem",
        }}
      >
        {props.labelName}
      </InputLabel>
      <StyledSelect {...props}>
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default CustomSelect;
