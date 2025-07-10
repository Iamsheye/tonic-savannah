import styled from "@emotion/styled";

export type ICritical = "critical" | "high" | "medium" | "low";

interface ISeverityProps {
  status: ICritical;
  isShort?: boolean;
  count?: number;
}

// first array is background color, second is text color
const SEVERITY_COLOR_MAP: Record<ICritical, [string, string]> = {
  critical: ["#BA00011A", "#BA0001"],
  high: ["#FF2D2E1A", "#FF2D2E"],
  medium: ["#FAA24B1A", "#FAA24B"],
  low: ["#53CA431A", "#53CA43"],
};

const StyledSeverity = styled.div<{
  status: ICritical;
}>`
  border-radius: 6px;
  display: flex;
  gap: 10px;
  padding: 4px 8px;
  text-transform: capitalize;
  width: max-content;
  background-color: ${(props) => SEVERITY_COLOR_MAP[props.status][0]};
  color: ${(props) => SEVERITY_COLOR_MAP[props.status][1]};

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
  return (
    <StyledSeverity status={status}>
      <span className="label">{isShort ? status.charAt(0) : status}</span>
      {count && <span className="count">{count}</span>}
    </StyledSeverity>
  );
};

export default Severity;
