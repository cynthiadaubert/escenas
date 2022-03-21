import { inboxListComp } from "./inbox/list";
import { sentListComp } from "./sent/list";
import { processLinks } from "./index";
import { inboxEmailComp } from "./inbox/email";

export function handleRoute(route) {
  const routes = [
    {
      path: /\/inbox/,
      handler: inboxListComp,
    },
    {
      path: /\/sent/,
      handler: sentListComp,
    },
    {
      path: /\/inbox\/./,
      handler: inboxEmailComp,
    },
  ];

  for (const r of routes) {
    if (r.path.test(route)) {
      const elem = r.handler();
      /*     console.log(elem); <--muestra el div que acabo de crear */
      const contentElem = document.querySelector(".contenido");
      if (contentElem.firstChild) {
        contentElem.firstChild.remove();
      }
      contentElem.appendChild(elem);
      processLinks(elem);
    }
  }
}
