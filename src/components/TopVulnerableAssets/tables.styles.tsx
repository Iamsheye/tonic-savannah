import styled from "@emotion/styled";

export const StyledVulnerableAssetsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .pl-3 {
    padding-left: 12px;
  }

  th {
    color: ${({ theme }) => theme.palette.text.secondary};
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.caption.fontSize};
    leading-trim: NONE;
    line-height: 1.125rem;
  }

  th,
  td {
    text-align: left;
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  }

  .severities {
    display: flex;
    gap: 8px;
  }

  .asset-name {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
    line-height: 1.25rem;
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;
