import { handleRoute } from "./handle-route";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
  /* processLinks(); <-- recursividad */
}

export function processLinks(container: any = document) {
  const links = container.querySelectorAll(".link-interno");
  for (const l of links) {
    l.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }
}

(function () {
  const buttonInbox = document.getElementById("mn");
  const buttonSent = document.getElementById("pd");
  buttonSent.addEventListener("click", function onClick() {
    buttonSent.style.backgroundColor = "#393939";
    buttonInbox.style.backgroundColor = "#888888";
    const bg = document.getElementById("pep");
    bg.style.backgroundColor = "#FF9BB3";
  });
  buttonInbox.addEventListener("click", function onClick() {
    buttonInbox.style.backgroundColor = "#393939";
    buttonSent.style.backgroundColor = "#888888";
    const bg = document.getElementById("pep");
    bg.style.backgroundColor = "#fff59b";
  });

  window.addEventListener("load", () => handleRoute(location.pathname));

  processLinks();
})();
