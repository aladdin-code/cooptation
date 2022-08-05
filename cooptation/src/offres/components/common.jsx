import styled from "styled-components";

export const BoxContainer = styled.div`

  width: 25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
  margin-right:14px;
  margin-left: 10px;
  padding: 5px 10px;
`;



export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: ;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color:#141010;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  color: #000044;
  background: #D3D3D3;
  height: 42px; 
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.7);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 14px;
  &::placeholder {
    color: #5C5C5C;
    font-size: 12px;
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #1CD8D2;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    #02B897,
    #2e94b9
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
