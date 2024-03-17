import React from "react";
import ActionButton from "../../Button/ActionButton";
import "./Dashboard.scss";
import FavoriteList from "../../Favorite/FavoriteList";

const Dashboard = () => {
  return (
    <div className="page-container">
      <ActionButton></ActionButton>
      <FavoriteList></FavoriteList>
    </div>
  );
};

export default Dashboard;
