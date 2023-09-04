import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .MuiTypography-root {
    font-size: 32px;
  }

  .MuiBreadcrumbs-separator {
    font-size: 25px;
  }

  .MuiBreadcrumbs-li {
    > a {
      text-decoration: none;
      font-weight: 700;
      color: black;

      > h1 {
        font-size: 32px;
      }
    }

    > h1 {
      font-size: 32px;
      color: black;
    }
  }
`;