import { styled } from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  gap: 30px;
`;

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 10px;
  padding: 10px 30px 10px 30px;
  background-color: green;
  border: 1px solid white;
  border-radius: 5px;
`;

export const ButtonText = styled.span`
  color: white;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorMessageStyled = styled.div`
  font-size: smaller;
  font-weight: 600;
  color: red;
`;
