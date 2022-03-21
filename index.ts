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
  const button = document.getElementById("ses");
  button.addEventListener("click", function onClick() {
    const bg = document.getElementById("pep");
    bg.style.backgroundColor = "coral";
  });

  window.addEventListener("load", () => handleRoute(location.pathname));

  processLinks();
})();
