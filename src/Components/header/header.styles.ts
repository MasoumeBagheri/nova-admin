import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 72px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--background);
  border-bottom: 1px solid var(--border);
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--foreground);
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    color: var(--foreground);
    font-size: 14px;
  }

  button {
    padding: 8px 14px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    color: var(--foreground);
    cursor: pointer;
  }
`;
