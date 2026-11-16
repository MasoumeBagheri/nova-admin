import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 600px;
  margin-top: 24px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--background);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;

  label {
    color: var(--foreground);
    font-size: 14px;
    font-weight: 600;
  }

  input,
  textarea,
  select {
    width: 100%;
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

export const SuccessMessage = styled.p`
  margin-bottom: 16px;
  color: #16a34a;
  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 16px;
  color: #ef4444;
  font-size: 14px;
`;
