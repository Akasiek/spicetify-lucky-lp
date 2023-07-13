import { isAlbumPage, isHomePage } from "./util";
import { addButton, removeButton } from "./button";

const toggleButton = () => {
  if (isHomePage() || isAlbumPage()) {
    addButton();
  } else {
    removeButton();
  }
};

async function main() {
  while (!Spicetify?.showNotification && !Spicetify?.Platform) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Show button on app load
  toggleButton();

  // Show button depending on navigation
  Spicetify.Platform.History.listen(() => {
    toggleButton();
  });
}

export default main;
