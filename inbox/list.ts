export function inboxListComp() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>Inbox</h3>
    <ul class="emails-list">
    <li>
        <a class="link-interno"  href="/inbox/1234">1234</a>
      
    </li>
    <li>
    
        <a class="link-interno" href="/inbox/5678">5678</a>
    </li>
    </ul>
    
    
    `;

  return div;
}
