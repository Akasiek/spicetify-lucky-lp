import { toggleButton } from "./button";

async function main() {
  while (!Spicetify?.showNotification || !Spicetify?.Platform?.History) {
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
