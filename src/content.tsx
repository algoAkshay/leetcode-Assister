import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Content from "./components/content";
import Providers from "./components/providers";

// 🔁 Injects the floating helper bot
function injectReactUI() {
  if (document.getElementById("_leetcode_helper_bot")) return;

  const root = document.createElement("div");
  root.id = "_leetcode_helper_bot";
  document.body.appendChild(root);

  createRoot(root).render(
    <StrictMode>
      <Providers>
        <Content />
      </Providers>
    </StrictMode>
  );

  console.log("🚀 UI injected on", location.href);
}

// 🕓 Wait for full DOM load if necessary
function onReady(callback: () => void) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

// ▶️ Initial inject
onReady(() => {
  injectReactUI();
});

// 🔁 Detect SPA-like navigation and re-inject if needed
let lastUrl = location.href;

new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    console.log("🔁 URL changed to", currentUrl);
    injectReactUI();
  }
}).observe(document, { subtree: true, childList: true });
