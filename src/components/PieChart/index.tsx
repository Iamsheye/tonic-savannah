import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";

const Label = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  font-size: 35px;
  line-height: 28px;
  color: ${({ theme }) => theme.palette.text.disabled};
`;

const TonicDonutChart = ({
  data,
}: {
  data: Array<{ value: number; label: string; color?: string }>;
}) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Box sx={{ position: "relative" }}>
      <PieChart
        hideLegend
        style={{
          width: "144px",
          height: "144px",
        }}
        series={[
          {
            data,
            innerRadius: 58,
            outerRadius: 68,
            paddingAngle: 3,
            cornerRadius: 999,
            startAngle: 0,
            endAngle: 360,
            cx: 68,
            cy: 68,
          },
        ]}
      />
      <Label>{total}</Label>
    </Box>
  );
};

export default TonicDonutChart;
