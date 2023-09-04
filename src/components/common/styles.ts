import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
`;

export const Description = styled.h3`
  margin: 0;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  ${Title} {
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;