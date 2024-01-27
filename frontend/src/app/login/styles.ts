import styled from "styled-components";

export const LoginContainer = styled.div`
  background: white;
  padding: 40px;
  width: 300px;
  margin: 100px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LoginInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RememberMeCheckbox = styled.div`
  margin: 10px 0;
`;

export const ForgotPasswordLink = styled.a`
  color: #007bff;
  display: block;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledRegister = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding-top: 5px;
`;

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: small;
  margin: 0;
`;
