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

const StyledSelect = styled(Select)<SelectProps>(() => ({
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

export const CustomSelect = (props: CustomSelectProps) => {
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

const NativeSelectStyles = styled("select")(({ theme }) => ({
  padding: "12px 36px 12px 16px",
  background: "#fff",
  borderRadius: "12px",
  border: "none",
  boxShadow: "0px 2.22px 3.33px 0px #0000000D",
  fontSize: theme.typography.body2.fontSize,

  appearance: "none",
  "-webkit-appearance": "none",

  backgroundImage: "url(./svg/chevron-down.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
  backgroundSize: "1em",

  "&:focus": {
    outline: "none",
    borderColor: "#9A9AAF",
  },
}));

interface NativeSelectProps extends React.HTMLAttributes<HTMLSelectElement> {}

export const NativeSelect = ({ children, ...props }: NativeSelectProps) => {
  return <NativeSelectStyles {...props}>{children}</NativeSelectStyles>;
};
