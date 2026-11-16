import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 28px;

  h2 {
    margin-bottom: 8px;
    color: var(--foreground);
    font-size: 22px;
    font-weight: 700;
  }

  p {
    color: var(--muted);
    font-size: 13px;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;
export const SearchInput = styled.input`
  width: 360px;
  max-width: 100%;
  height: 42px;
  padding: 0 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  outline: none;
  background: var(--surface);
  color: var(--foreground);
  font-family: inherit;
  font-size: 13px;
  direction: rtl;
  text-align: right;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--muted);
  }
`;

export const AddUserButton = styled.button`
  padding: 11px 18px;
  border: none;
  border-radius: 7px;
  background: var(--accent);
  color: #fff;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
`;

export const UsersTable = styled.div`
  margin-top: 24px;
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: right;

  th,
  td {
    padding: 16px;
    border-bottom: 1px solid var(--border);
    color: var(--foreground);
    font-size: 13px;
    white-space: nowrap;
  }

  th {
    background: var(--background);
    color: var(--muted);
    font-weight: 600;
  }

  tbody tr:hover {
    background: var(--background);
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const StatusMessage = styled.p`
  margin-top: 24px;
  padding: 32px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  color: var(--muted);
  text-align: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid
    ${({ $active }) => ($active ? "var(--accent)" : "var(--border)")};
  border-radius: 7px;
  background: ${({ $active }) =>
    $active ? "var(--accent)" : "var(--surface)"};
  color: ${({ $active }) => ($active ? "#fff" : "var(--foreground)")};
  font-family: inherit;
  font-size: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
