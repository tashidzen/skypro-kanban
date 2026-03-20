import styled, { keyframes } from "styled-components";

export const Smain = styled.main`
  width: 100%;
  background-color: ${({ theme }) =>
    theme === "light" ? "#eaeef6" : "#151419"};
`;

export const Scontainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const Smain__block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const Smain__content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const SmainNoTasksMessage = styled.p`
  text-align: center;
  padding: 40px;
  font-size: 20px;
  color: ${({ theme }) => (theme === "dark" ? "#ffffff" : "#000000")};
`;

const loadingAnimation = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const Smain__loading = styled.p`
  margin-top: 10%;
  text-align: center;
  font-size: 20px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#eaeef6" : "#151419"};
  color: ${({ theme }) => (theme === "light" ? "#151419" : "#eaeef6")};

  &::after {
    content: "⏳";
    display: inline-block;
    font-size: 20px;
    line-height: 1;
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

export const S_error = styled.p`
  margin-top: 1%;
  text-align: center;
  font-size: 20px;
`;
