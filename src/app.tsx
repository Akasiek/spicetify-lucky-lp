import React from "react";
import startObserver, { disconnectObserver } from "./observer";
import { isAlbumCollectionPage } from "./util";
import "./style.scss";

async function main() {
  while (!Spicetify?.showNotification && !Spicetify?.Platform) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  Spicetify.Platform.History.listen(() => {
    if (isAlbumCollectionPage()) {
      startObserver();
    } else {
      disconnectObserver();
    }
  });
}

export default main;
