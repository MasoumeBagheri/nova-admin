import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 60px auto;
  padding: 32px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--background);

  h2 {
    margin-bottom: 24px;
    color: var(--foreground);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  label {
    color: var(--foreground);
  }

  input {
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 8px;
    background: var(--surface);
    color: var(--foreground);
    outline: none;

    &:focus {
      border-color: var(--accent);
    }
  }
`;

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 12px;
`;

export const FormErrorMessage = styled.p`
  margin-bottom: 16px;
  color: #ef4444;
  font-size: 13px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: var(--accent);
  color: white;
  font-weight: 600;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
