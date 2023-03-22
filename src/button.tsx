import React from "react";
import ReactDOM from "react-dom";
import shuffleIcon from "./shuffleIcon";
import { handleClick } from "./util";
import TooltipWrapper = Spicetify.ReactComponent.TooltipWrapper;

const reactDom = Spicetify.ReactDOM as typeof ReactDOM;

const createButton = () => (
  <TooltipWrapper label="Get Random Saved Album" showDelay={200}>
    <div className="random-saved-album-container">
      <button type="button" onClick={handleClick} id="random-saved-album-btn">
        {shuffleIcon()}
      </button>
    </div>
  </TooltipWrapper>
);

const renderButton = () => {
  const btnSection = document.querySelector(".collection-searchBar-searchBar");

  if (btnSection) {
    reactDom.render(
      reactDom.createPortal(createButton(), btnSection),
      document.createElement("div")
    );
  }
};
export default renderButton;
