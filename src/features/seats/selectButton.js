import React from "react";
// import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

export const ButtonSelect = () => {
    const StyledButton = styled.button`
        height: 8vh;
        width: 20vw;
        margin-left: 8vw;
        color: black;
        transition: 0.3s;
        &:hover {
            background-color: black;
            color: white;
        }
    `;
    return (
        <Link to="/confirmation"><StyledButton>Rezerwuj</StyledButton></Link>
    );
}