import styled from "styled-components";

export const Sheader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Sheader__block = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const Sheader__logo = styled.div`
  width: 85px;

  img {
    width: 85px;
  }

  ${({ $show }) => $show && `display: block;`}
  ${({ $light }) => $light && `display: block;`}
  ${({ $dark }) => $dark && `display: none;`}
`;

export const Sheader__nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sheader__btn = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  a {
    color: #ffffff;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const Sheader__user = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;
