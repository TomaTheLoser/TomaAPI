// TomaAPI Navigation — edit this file to add new pages
// Each entry: { href: 'filename.html', label: 'Display Name', section: 'Section Header' }
// section is optional — only set it on the FIRST item of a new section

const NAV_ITEMS = [
  { href: 'installation.html', label: 'Installation', section: 'Getting Started' },
  { href: 'character-controller.html', label: 'CharacterController', section: 'Features' },
  { href: 'tpp.html', label: 'TPP' },
];

(function () {
  const current = location.pathname.split('/').pop() || 'index.html';

  let html = '<div class="sidebar-logo"><h1>TomaAPI</h1><span>Godot 4 · C# · v1.0</span></div>';

  let lastSection = null;
  NAV_ITEMS.forEach(item => {
    if (item.section && item.section !== lastSection) {
      html += `<div class="nav-section">${item.section}</div>`;
      lastSection = item.section;
    }
    const active = item.href === current ? ' active' : '';
    html += `<a class="nav-link${active}" href="${item.href}">${item.label}</a>`;
  });

  document.getElementById('sidebar').innerHTML = html;
})();

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
}
