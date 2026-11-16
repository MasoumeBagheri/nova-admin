import styled from "styled-components";
import { LoginForm } from "@/Components/login-form/login-form";

const LoginPageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--surface);
`;

const Login = () => {
  return (
    <LoginPageWrapper>
      <LoginForm />
    </LoginPageWrapper>
  );
};

export default Login;
