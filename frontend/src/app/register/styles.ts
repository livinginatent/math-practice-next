import styled from "styled-components";

export const RegisterContainer = styled.div`
  background: white;
  padding: 40px;
  width: 300px;
  margin: 100px auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const RegisterTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const RegisterInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const RegisterButton = styled.button`
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
