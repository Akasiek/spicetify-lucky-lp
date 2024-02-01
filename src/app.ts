import { toggleButton } from "./button";

async function main() {
  while (
    !Spicetify?.showNotification &&
    !Spicetify?.Platform?.History &&
    !Spicetify?.CosmosAsync
  ) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Show button on app load
  toggleButton(Spicetify.Platform.History.location);

  // Show button depending on navigation
  Spicetify.Platform.History.listen((location: Location) => {
    toggleButton(location);
  });
}

export default main;
