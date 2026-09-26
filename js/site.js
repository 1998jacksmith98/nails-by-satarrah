(function () {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  const path = location.pathname.split("/").pop() || "index.html";
  const book = "https://nailsbysatarrah.as.me/schedule/821e058f";
  const ig = "https://www.instagram.com/nailsbysatarrah/";
  const tt = "https://www.tiktok.com/@nailsbysatarrah";
  const mail = "mailto:NailsbySatarrah@gmail.com";

  if (header) {
    header.innerHTML = `
      <div class="preview-banner">Preview mockup by <a href="https://halfpennydigital.co.uk/">Halfpenny Digital</a> — not the live site yet</div>
      <div class="site-header">
        <div class="wrap header-inner">
          <a class="brand" href="index.html">Nails by <span>Satarrah</span></a>
          <nav class="desk-nav" aria-label="Primary">
            <a href="index.html" class="${path === "index.html" ? "active" : ""}">Home</a>
            <a href="prices.html" class="${path === "prices.html" ? "active" : ""}">Prices</a>
            <a href="book.html" class="${path === "book.html" ? "active" : ""}">Book</a>
            <a href="${ig}" target="_blank" rel="noreferrer">Instagram</a>
            <a href="${tt}" target="_blank" rel="noreferrer">TikTok</a>
          </nav>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div id="mobile-nav" class="mobile-nav" hidden>
        <nav aria-label="Mobile">
          <a href="index.html">Home</a>
          <a href="prices.html">Prices</a>
          <a href="book.html">Book</a>
          <a href="${ig}" target="_blank" rel="noreferrer">Instagram</a>
          <a href="${tt}" target="_blank" rel="noreferrer">TikTok</a>
        </nav>
      </div>`;
  }

  if (footer) {
    footer.innerHTML = `
      <footer>
        <div class="wrap footer-grid">
          <div>
            <p class="brand" style="margin:0 0 8px">Nails by <span>Satarrah</span></p>
            <p>Natural nails, BIAB, hard gel, acrylic and spa pedicures in Crayford, DA1.</p>
          </div>
          <div>
            <p><strong>Book</strong></p>
            <p><a href="${book}" target="_blank" rel="noreferrer">Open the booking page</a><br>
            <a href="${mail}">NailsbySatarrah@gmail.com</a><br>
            Or message me on Instagram.</p>
          </div>
          <div>
            <p><strong>Socials</strong></p>
            <p><a href="${ig}" target="_blank" rel="noreferrer">@nailsbysatarrah</a><br>
            <a href="${tt}" target="_blank" rel="noreferrer">TikTok</a></p>
          </div>
        </div>
        <div class="wrap credit">
          Website built by <a href="https://halfpennydigital.co.uk/">Halfpenny Digital</a>
        </div>
      </footer>
      <div class="mobile-cta" data-mobile-cta>
        <a class="btn" href="${book}" target="_blank" rel="noreferrer">Book</a>
        <a class="btn ghost" href="${ig}" target="_blank" rel="noreferrer">Instagram</a>
      </div>`;
  }

  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("mobile-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      const open = !nav.hasAttribute("hidden");
      if (open) {
        nav.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      } else {
        nav.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
      }
    });
  }
})();
