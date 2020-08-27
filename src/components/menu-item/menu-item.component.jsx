import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div class={`${size} menu-item`}>
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

export default MenuItem;
