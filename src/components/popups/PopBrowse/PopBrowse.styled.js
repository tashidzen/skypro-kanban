import styled, { keyframes } from "styled-components";

export const SpopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const SpopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const SpopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#20202C")};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: ${({ theme }) =>
    theme === "light" ? "0.7px solid #d4dbe5" : "0.7px solid #4E5566"};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const SpopBrowseContent = styled.div`
  display: block;
  text-align: left;

  &.categories__theme {
    opacity: 1;
  }

  &.theme-top {
    display: block;
  }

  @media screen and (max-width: 495px) {
    &.theme-top {
      display: none;
    }
  }
`;

export const SpopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const SThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const SpopBrowseTtl = styled.h3`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const SpopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const Ssubttl = styled.span`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const SstatusP = styled(Ssubttl)`
  margin-bottom: 14px;
`;

export const SstatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SstatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  ${(props) =>
    props.$isGray &&
    `
    background: #94a6be;
    color: ${props.theme === "light" ? "#ffffff" : "#151419"} !important;
    
    p {
      color: ${props.theme === "light" ? "#ffffff" : "#151419"} !important;
    }
     `}

  ${(props) =>
    props.$isHide &&
    `
    display: none;
  `}
`;

export const SpopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const SpopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const SformBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SformBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme, $isEditing }) => {
    if ($isEditing) {
      return theme === "light" ? "#ffffff" : "#20202C";
    }
    return theme === "light" ? "#eaeef6" : "#151419";
  }};
  border: ${({ theme, $isEditing }) => {
    if ($isEditing) {
      return theme === "light"
        ? "0.7px solid #94A6BE66"
        : "0.7px solid #94A6BE66";
    }
    return theme === "light"
      ? "0.7px solid rgba(148, 166, 190, 0.4)"
      : "0.7px solid #151419";
  }};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#8B94A3")};

  &::-moz-placeholder,
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const Scalendar = styled.div`
  ${({ $popNewCardCalendar }) => $popNewCardCalendar && `width: 100%;`}

  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const ScalendarTtl = styled(Ssubttl)`
  margin-bottom: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const ScategoriesP = styled(Ssubttl)`
  margin-bottom: 14px;
`;

export const SpopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
    }
  }
`;

export const SbtnGroup = styled.div`
  button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    width: 100%;

    button {
      margin-right: 0px;
    }
  }
`;

export const SbtnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;

  a {
    color: #565eef;
  }

  ${({ $_hover03 }) =>
    $_hover03 &&
    `
    &:hover {
      background-color: #33399b;
      color: #FFFFFF;
      
      a {
        color: #FFFFFF;
      }
    }
  `}
`;

export const SbtnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;

  a {
    color: #ffffff;
  }

  ${({ $_hover01 }) =>
    $_hover01 &&
    `
    &:hover {
      background-color: #33399b;
    }
      `}
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

export const SpopBrowseLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#fff")};

  &::after {
    content: "⏳";
    display: inline-block;
    font-size: 18px;
    line-height: 1;
    animation: ${loadingAnimation} 1.5s infinite;
  }
`;

export const SclassTypeCard = styled.p`
  color: ${({ theme, $lightText, $darkText }) =>
    theme === "light" ? $lightText : $darkText};
`;

export const Scategories__theme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  display: block;

  background: ${({ theme, $lightBg, $darkBg }) =>
    theme === "light" ? $lightBg : $darkBg};
`;
