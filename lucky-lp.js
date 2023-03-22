var luckyDlp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      module.exports = Spicetify.React;
    }
  });

  // src/button.tsx
  var import_react2 = __toESM(require_react());

  // src/shuffleIcon.tsx
  var import_react = __toESM(require_react());
  var shuffleIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    "data-encore-id": "icon",
    className: "Svg-sc-ytk21e-0 uPxdw"
  }, /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"
  }));
  var shuffleIcon_default = shuffleIcon;

  // src/util.ts
  var isAlbumCollectionPage = () => {
    const pathname = Spicetify.Platform.History.location.pathname;
    return pathname === "/collection/albums";
  };
  var getRandomAlbumIndex = (total) => Math.floor(Math.random() * (total + 1));
  var getRandomSavedAlbum = async () => {
    try {
      const result = await Spicetify.CosmosAsync.get(
        "https://api.spotify.com/v1/me/albums?limit=1"
      );
      if (result && (result == null ? void 0 : result.total)) {
        const albumsCount = result.total;
        const randomIndex = getRandomAlbumIndex(albumsCount);
        const randomResult = await Spicetify.CosmosAsync.get(
          `https://api.spotify.com/v1/me/albums?limit=1&offset=${randomIndex - 1}`
        );
        const randomAlbum = randomResult.items[0];
        Spicetify.Platform.History.push(`/album/${randomAlbum.album.id}`);
        return randomAlbum;
      }
      return false;
    } catch (e) {
      return false;
    }
  };
  var handleClick = async () => {
    Spicetify.showNotification("Choosing random album...");
    const album = await getRandomSavedAlbum();
    if (album !== false) {
      const artistString = album.album.artists.map((artist) => artist.name).join(",");
      Spicetify.showNotification(
        `Chosen album: <strong>${album.album.name}</strong> by <i>${artistString}</i>`
      );
    } else {
      Spicetify.showNotification("Random album cannot be chosen.", true);
    }
  };

  // src/button.tsx
  var TooltipWrapper = Spicetify.ReactComponent.TooltipWrapper;
  var reactDom = Spicetify.ReactDOM;
  var createButton = () => /* @__PURE__ */ import_react2.default.createElement(TooltipWrapper, {
    label: "Get Random Saved Album",
    showDelay: 200
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "random-saved-album-container"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    type: "button",
    onClick: handleClick,
    id: "random-saved-album-btn"
  }, shuffleIcon_default())));
  var renderButton = () => {
    const btnSection = document.querySelector(".collection-searchBar-searchBar");
    if (btnSection) {
      reactDom.render(
        reactDom.createPortal(createButton(), btnSection),
        document.createElement("div")
      );
    }
  };
  var button_default = renderButton;

  // src/observer.ts
  var mutate = () => {
    console.log("MUTATE!");
    button_default();
  };
  var observer = new MutationObserver(mutate);
  var config = {
    characterData: false,
    attributes: false,
    childList: true,
    subtree: false
  };
  var startObserver = () => {
    const mainElement = document.querySelector(".contentSpacing");
    if (mainElement) {
      observer.observe(mainElement, config);
    }
  };
  var disconnectObserver = () => observer.disconnect();
  var observer_default = startObserver;

  // src/app.tsx
  async function main() {
    while (!(Spicetify == null ? void 0 : Spicetify.showNotification) && !(Spicetify == null ? void 0 : Spicetify.Platform)) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    Spicetify.Platform.History.listen(() => {
      if (isAlbumCollectionPage()) {
        observer_default();
      } else {
        disconnectObserver();
      }
    });
  }
  var app_default = main;

  // node_modules/spicetify-creator/dist/temp/index.jsx
  (async () => {
    await app_default();
  })();
})();
