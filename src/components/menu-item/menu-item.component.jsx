import React from "react";
import { withRouter } from "react-router-dom"; // withRouter: higher-order component
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    class={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div class="content">
      <h1 class="title">{title.toUpperCase()}</h1>
      <span class="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
