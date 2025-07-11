import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

export type ICritical = "critical" | "high" | "medium" | "low";

interface ISeverityProps {
  status: ICritical;
  isShort?: boolean;
  count?: number;
}

const StyledSeverity = styled.div<{
  colors: { bg: string; text: string };
}>`
  border-radius: 6px;
  display: flex;
  gap: 10px;
  padding: 4px 8px;
  text-transform: capitalize;
  width: max-content;
  background-color: ${(props) => props.colors.bg};
  color: ${(props) => props.colors.text};

  & .label {
    font-family: Inter;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  & .count {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background:
      linear-gradient(0deg, #383874, #383874),
      linear-gradient(0deg, #03165f, #03165f);
    background-clip: text;
  }
`;

const Severity = ({ status, count, isShort }: ISeverityProps) => {
  const theme = useTheme();
  const COLOR_CODE = theme.palette.severity;

  const SEVERITY_COLOR_MAP: Record<ICritical, [string, string]> = {
    critical: [COLOR_CODE.criticalBg, COLOR_CODE.critical],
    high: [COLOR_CODE.highBg, COLOR_CODE.high],
    medium: [COLOR_CODE.mediumBg, COLOR_CODE.medium],
    low: [COLOR_CODE.lowBg, COLOR_CODE.low],
  };

  return (
    <StyledSeverity
      colors={{
        bg: SEVERITY_COLOR_MAP[status][0],
        text: SEVERITY_COLOR_MAP[status][1],
      }}
    >
      <span className="label">{isShort ? status.charAt(0) : status}</span>
      {count && <span className="count">{count}</span>}
    </StyledSeverity>
  );
};

export default Severity;
