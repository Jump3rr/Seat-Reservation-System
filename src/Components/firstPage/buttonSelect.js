import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const ButtonSelect = () => {
  return (
    <Link to="/seats">
      <Button>Wybierz miejsca</Button>
    </Link>
  );
}