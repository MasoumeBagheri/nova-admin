import styled from "styled-components";

export const DashboardHeader = styled.div`
  margin-bottom: 28px;

  h2 {
    margin-bottom: 10px;
    color: var(--foreground);
    font-size: 22px;
    font-weight: 700;
  }

  p {
    color: var(--muted);
    font-size: 13px;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 28px;
`;

export const StatCard = styled.article`
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 125px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--background);
  transition: border-color 0.2s;

  &:hover {
    border-color: var(--accent);
  }
`;

export const StatIcon = styled.div<{ $variant: "products" | "users" }>`
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border-radius: 12px;

  background: ${({ $variant }) =>
    $variant === "products"
      ? "rgba(53, 99, 233, 0.12)"
      : "rgba(249, 115, 22, 0.12)"};

  color: ${({ $variant }) => ($variant === "products" ? "#3563e9" : "#f97316")};
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    color: var(--muted);
    font-size: 13px;
  }

  strong {
    color: var(--foreground);
    font-size: 27px;
    font-weight: 700;
  }
`;

export const StatusMessage = styled.p`
  margin-top: 24px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--background);
  color: var(--muted);
  text-align: center;
`;
