import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Sidebar } from "@/Components/sidebar/sidebar";
import { Header } from "@/Components/header/header";

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--background);
`;

const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PageContent = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 32px;
  background: var(--surface);

  h2 {
    margin-bottom: 12px;
    color: var(--foreground);
    font-size: 24px;
  }

  p {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MainLayout = () => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <Header />
        <PageContent>
          <Outlet />
        </PageContent>
      </MainContent>
    </LayoutWrapper>
  );
};
