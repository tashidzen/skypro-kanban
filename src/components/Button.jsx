import styled from "styled-components";

const SButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }

`;

const TextButton = styled(SButton)`
  &:hover {
  background-color: #33399b;
}
`;

const Button = ({ text, onClick }) => {
  return <TextButton onClick={onClick}>{text}</TextButton>;
};

export default Button;
