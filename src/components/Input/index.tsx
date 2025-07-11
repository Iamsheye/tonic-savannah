import styled from "@emotion/styled";
import Box from "@mui/material/Box";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  padding: 12px 48px 12px 16px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e2ea;
  min-width: 250px;
  box-shadow: 0px 2.22px 3.33px 0px #0000000d;

  font-family: Inter;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;

  :focus-visible {
    outline: none;
    border-color: #9a9aaf;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = (props: InputProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: { xs: "100%", md: "auto" },
      }}
    >
      <StyledInput {...props} />
      <Box
        sx={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_0_9059"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="-1"
            width="21"
            height="21"
          >
            <rect
              x="0.833344"
              y="-0.00585938"
              width="20"
              height="20"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_9059)">
            <path
              d="M16.7708 16.9941L11.7917 12.015C11.375 12.3205 10.9181 12.5601 10.421 12.7337C9.9239 12.9073 9.39492 12.9941 8.83407 12.9941C7.4447 12.9941 6.2639 12.508 5.29168 11.5358C4.31945 10.5636 3.83334 9.38303 3.83334 7.99414C3.83334 6.60525 4.31945 5.4247 5.29168 4.45247C6.2639 3.48025 7.44445 2.99414 8.83334 2.99414C10.2222 2.99414 11.4028 3.48025 12.375 4.45247C13.3472 5.4247 13.8333 6.60549 13.8333 7.99487C13.8333 8.55572 13.7465 9.0847 13.5729 9.58181C13.3993 10.0789 13.1597 10.5358 12.8542 10.9525L17.8333 15.9316L16.7708 16.9941ZM8.83334 11.4941C9.80557 11.4941 10.632 11.1539 11.3125 10.4733C11.9931 9.79275 12.3333 8.96636 12.3333 7.99414C12.3333 7.02192 11.9931 6.19553 11.3125 5.51497C10.632 4.83442 9.80557 4.49414 8.83334 4.49414C7.86112 4.49414 7.03473 4.83442 6.35418 5.51497C5.67362 6.19553 5.33334 7.02192 5.33334 7.99414C5.33334 8.96636 5.67362 9.79275 6.35418 10.4733C7.03473 11.1539 7.86112 11.4941 8.83334 11.4941Z"
              fill="#9A9AAF"
            />
          </g>
        </svg>
      </Box>
    </Box>
  );
};

export default Input;
