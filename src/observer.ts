import renderButton from "./button";

const mutate = () => {
  console.log("MUTATE!");
  renderButton();
};

const observer = new MutationObserver(mutate);

const config = {
  characterData: false,
  attributes: false,
  childList: true,
  subtree: false,
};

const startObserver = () => {
  const mainElement = document.querySelector(".contentSpacing");
  if (mainElement) {
    observer.observe(mainElement, config);
  }
};

export const disconnectObserver = () => observer.disconnect();

export default startObserver;
