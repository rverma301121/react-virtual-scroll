import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./ActionButton.scss";

const ActionButton = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="btn-container">
      <Button variant="primary" onClick={() => handleClick("list")}>
        View Album Lists
      </Button>{" "}
    </div>
  );
};

export default ActionButton;
