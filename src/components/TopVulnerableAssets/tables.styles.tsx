import styled from "@emotion/styled";

export const StyledVulnerableAssetsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .pl-3 {
    padding-left: 12px;
  }

  th {
    color: #9a9aaf;
    font-weight: 500;
    font-size: 0.75rem;
    leading-trim: NONE;
    line-height: 1.125rem;
  }

  th,
  td {
    text-align: left;
    padding: 12px 0;
    border-bottom: 1px solid #eaecf0;
  }

  .severities {
    display: flex;
    gap: 8px;
  }

  .asset-name {
    font-size: 0.875rem;
    line-height: 1.25rem;
    background:
      linear-gradient(0deg, #383874, #383874),
      linear-gradient(0deg, #03165f, #03165f);
    background-clip: text;
  }
`;
