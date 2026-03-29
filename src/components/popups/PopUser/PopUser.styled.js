import styled from "styled-components";

export const Sheader__popUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ theme }) => (theme === "light" ? "#fff" : "#202229")};
  box-shadow: ${({ theme }) =>
    theme === "light"
      ? "0px 10px 39px 0px rgba(26, 56, 101, 0.21)"
      : "0px 10px 39px 0px #94A6BE"};
  padding: 34px;
  text-align: center;
  z-index: 2;

  ${({ $popUserSet }) =>
    $popUserSet &&
    `
   &:target {
     display: block;
    }
   `}
`;

export const SpopUserSetName = styled.p`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;
export const SpopUserSetMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;
export const SpopUserSetTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${({ theme }) => (theme === "light" ? "#eaeef6" : "#FFFFFF")};
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme === "light" ? "#94a6be" : "#565EEF"};
    transition: 0.5s;
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const S_hover03 = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => (theme === "light" ? "#565EEF" : "#FFFFFF")};
  border-radius: 4px;
  border: ${({ theme }) =>
    theme === "light" ? "1px solid #565EEF" : "1px solid #FFFFFF"};
  a {
    color: ${({ theme }) => (theme === "light" ? "#565EEF" : "#FFFFFF")};
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#33399b" : "#565EEF"};
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }
`;
