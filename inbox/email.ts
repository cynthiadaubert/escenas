export function inboxEmailComp() {
  const div = document.createElement("div");
  const emailId = location.pathname.split("/")[2];
  /*   console.log("soy el email id", emailId); */
  div.innerHTML = `
      
        <h2>Recibido</h2>
        <div>${emailId}</div>
      
      `;

  return div;
}
