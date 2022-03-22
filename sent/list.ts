export function sentListComp() {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>Sent</h3>
    <ul class="emails-list">
    <li>
        <a class="link-interno"  href="/sent/4321">4321</a>
      
    </li>
    <li>
    
        <a class="link-interno" href="/sent/8765">8765</a>
    </li>
    </ul>
    
    
    `;

  return div;
}
