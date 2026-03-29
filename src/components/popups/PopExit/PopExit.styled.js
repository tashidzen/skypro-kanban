import styled from "styled-components";

export const SpopExit = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const SpopExit__container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const SpopExit__block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#20202C")};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: ${({ theme }) =>
    theme === "light" ? "0.7px solid #d4dbe5" : "0.7px solid #4E5566"};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const SpopExit__ttl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#FFFFFF")};
  }
`;

export const SpopExit__form = styled.form``;

export const SpopExit__formGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const SpopExit__exitYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
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
  margin-right: 10px;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }

  ${({ $_hover01 }) =>
    $_hover01 &&
    `
    &:hover {
      background-color: #33399b;
    }
      `}
`;

export const SpopExit__exitNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: ${({ theme }) =>
    theme === "light" ? "0.7px solid #565eef" : "0.7px solid #FFFFFF"};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => (theme === "light" ? "#565eef" : "#FFFFFF")};

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }

  ${({ $_hover03 }) =>
    $_hover03 &&
    `
    &:hover {
      background-color: #33399b;
      border: #33399b;
      color: #FFFFFF;
      
      a {
        color: #FFFFFF;
      }
    }
  `}
`;
