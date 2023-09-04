import Paper from '@mui/material/Paper';
import styled from "styled-components";
import Button from '@mui/material/Button';

export const GroupPaper = styled(Paper)`
  height: 350px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 30px;

  div {
    width: 100%;
  }

  .MuiButtonBase-root {
    margin-top: 20px;
  }

  .MuiFormControl-root:first-child {
    margin-bottom: 10px;
  }
`;

export const CustomButton = styled(Button)`
  height: 40px;
`;