import styled from "styled-components";
export const HeaderContainer = styled.header`
  text-align: center;
  border-bottom: 1px solid #eee;
  box-shadow: 0px 0px 5px #eee;
  display: flex;
  flex-direction: "row";
`;

export const LogoDiv = styled.div`
  width: 100%;
  text-align: center;
`;
export const BackButton = styled.div`
  width: 10%;
  float: left;
  padding: 2% 0;
  @media only screen and (max-width: 768px) and (min-width: 768px) {
    width: 10%;
    padding: 9% 3%;
  }

  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: green;
  }
`;
