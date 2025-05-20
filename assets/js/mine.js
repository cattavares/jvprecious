function loadHTML(selector, file, callback) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch ${file}`);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(err));
}

function initMenuToggle() {
  const menuToggle = document.querySelector('.menuToggle');
  if (!menuToggle) return;

  menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('menu-visible');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#header-placeholder", "other/header.html");
  loadHTML("#footer-placeholder", "other/footer.html");
});
