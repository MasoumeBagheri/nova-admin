import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(15, 23, 42, 0.6);
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  border-radius: 16px;
  background: var(--background);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    color: var(--foreground);
    font-size: 20px;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 24px;
  cursor: pointer;
`;
