import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import { Colors } from "../../styledHelpers/Colors";

export const ButtonSelect = () => {
    const StyledButton = styled.button`
      height: 8vh;
      width: 20vw;
      margin-left: 8vw;
      color: ${Colors.black};
      transition: 0.3s;
      &:hover {
        background-color: ${Colors.black};
        color: ${Colors.white};
      }
    `;
    return (
      <Link to="/confirmation">
        <StyledButton>Rezerwuj</StyledButton>
      </Link>
    );
}