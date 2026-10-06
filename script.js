(function () {

  var LOGO = "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/estehdesa/Logo-Es-Teh-Desa.png";

  var MENU = [
    { nama: "Teh Original",          gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Teh-Original.png", harga: "Rp3.000,00" },
    { nama: "Teh Original Jumbo",          gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Teh-Original.png", harga: "Rp4.000,00" },
    { nama: "Teh Kampul",            gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Teh-Kampul.png", harga: "Rp4.000,00" },
    { nama: "Lychee Tea",            gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Lychee-Tea.png", harga: "Rp6.000,00" },
    { nama: "Jasmine Tea",           gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Jasmine-Tea.png", harga: "Rp6.000,00" },
    { nama: "Passion Fruit Tea",     gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Passion-Fruit-Tea.png", harga: "Rp5.000,00" },
    { nama: "Blueberry Tea",         gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Blueberry-Tea.png", harga: "Rp7.000,00" },
    { nama: "Thai Tea",              gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Thai-Tea.png", harga: "Rp6.000,00" },
    { nama: "Green Tea",             gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Green-Tea.png", harga: "Rp8.000,00" },
    { nama: "Macchiatto ChocoMelt",  gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Choco-Macchiato.png", harga: "Rp10.000,00" },
    { nama: "Macchiatto Cappuccino", gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Cappucino-Macchiato.png", harga: "Rp10.000,00" },
    { nama: "Macchiatto RedVelvet",  gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Red-Velvet-Macchiato.png", harga: "Rp10.000,00" },
    { nama: "Macchiatto Taro",       gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/10.-Taro-Macchiato-1.png", harga: "Rp10.000,00" },
    { nama: "Milk Tea",              gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Teh-Tarik.png", harga: "Rp6.000,00" },
    { nama: "Lychee Fruit",          gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Lychee-Fruit.png", harga: "Rp6.000,00" },
    { nama: "Mango Fruit",           gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Mango-Fruit.png", harga: "Rp7.000,00" },
    { nama: "Grape Fruit",           gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Grape-Fruit.png", harga: "Rp7.000,00" },
    { nama: "Strawberry Fruit",      gambar: "https://raw.githubusercontent.com/CBrusMCYT/website_cheatcode/refs/heads/estehdesa/Strawberry-Fruit.png", harga: "Rp7.000,00" }
  ];

  var ANGGOTA = [
    { nama: "Raifan Ady Trita P.", keterangan: "Website Coder", foto: "" },
    { nama: "Dyandra Naufal P.M.", keterangan: "Supplier dan CEO Es Teh Desa", foto: "" },
    { nama: "Kenzie Aditya P.", keterangan: "Mencari Referensi", foto: "" },
    { nama: "Aura Shafira", keterangan: "Menambah Informasi", foto: "" },
    { nama: "Khansa Tsabita", keterangan: "Menambah Informasi", foto: "" }
  ];

  function el(tag, kelas, teks) {
    var e = document.createElement(tag);
    if (kelas) e.className = kelas;
    if (teks) e.textContent = teks;
    return e;
  }

  function pasangGeser(p) {
    var gulir = p.querySelector(".etd-gulir");
    var bar = p.querySelector(".etd-bar");
    var thumb = p.querySelector(".etd-thumb");
    if (!gulir || !bar || !thumb) return;
    p.classList.add("etd-js");

    function perbarui() {
      var lebar = gulir.scrollWidth, tampak = gulir.clientWidth;
      if (lebar <= tampak + 1) { bar.style.visibility = "hidden"; return; }
      bar.style.visibility = "visible";
      var trek = bar.clientWidth;
      var tw = Math.max(40, trek * tampak / lebar);
      var maks = lebar - tampak;
      thumb.style.width = tw + "px";
      thumb.style.left = (gulir.scrollLeft / maks) * (trek - tw) + "px";
    }
    gulir.addEventListener("scroll", perbarui, { passive: true });
    window.addEventListener("resize", perbarui);
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(perbarui);
      ro.observe(gulir);
      if (gulir.firstElementChild) ro.observe(gulir.firstElementChild);
    }
    perbarui();

    thumb.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var x0 = e.clientX, kiri0 = gulir.scrollLeft;
      var trek = bar.clientWidth - thumb.offsetWidth;
      var maks = gulir.scrollWidth - gulir.clientWidth;
      thumb.setPointerCapture(e.pointerId);
      function geser(ev) { gulir.scrollLeft = kiri0 + (ev.clientX - x0) * maks / trek; }
      function lepas() {
        thumb.removeEventListener("pointermove", geser);
        thumb.removeEventListener("pointerup", lepas);
        thumb.removeEventListener("pointercancel", lepas);
      }
      thumb.addEventListener("pointermove", geser);
      thumb.addEventListener("pointerup", lepas);
      thumb.addEventListener("pointercancel", lepas);
    });

    bar.addEventListener("pointerdown", function (e) {
      if (e.target === thumb) return;
      var r = bar.getBoundingClientRect();
      var trek = bar.clientWidth - thumb.offsetWidth;
      var rasio = Math.min(1, Math.max(0, (e.clientX - r.left - thumb.offsetWidth / 2) / trek));
      gulir.scrollLeft = rasio * (gulir.scrollWidth - gulir.clientWidth);
    });

    var seret = false, x0 = 0, kiri0 = 0, bergerak = false;
    gulir.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      seret = true; bergerak = false; x0 = e.pageX; kiri0 = gulir.scrollLeft;
    });
    window.addEventListener("mousemove", function (e) {
      if (!seret) return;
      var dx = e.pageX - x0;
      if (!bergerak && Math.abs(dx) < 4) return;
      bergerak = true;
      gulir.classList.add("menyeret");
      gulir.scrollLeft = kiri0 - dx;
    });
    window.addEventListener("mouseup", function () {
      seret = false;
      gulir.classList.remove("menyeret");
    });
    gulir.addEventListener("dragstart", function (e) { e.preventDefault(); });
  }

  function init() {
    var root = document.getElementById("etd");
    if (!root) return;

    if (LOGO) {
      var lh = document.getElementById("etd-logo-home");
      var ln = document.getElementById("etd-logo-nav");
      if (lh) { lh.src = LOGO; lh.style.display = "block"; }
      if (ln) { ln.src = LOGO; ln.style.display = "block"; }
    }

    var grid = document.getElementById("etd-grid-es");
    if (grid) {
      MENU.forEach(function (m, i) {
        var ganjilTerakhir = (MENU.length % 2 === 1 && i === MENU.length - 1);
        var kartu = el("div", "etd-es" + (ganjilTerakhir ? " etd-tengah" : ""));
        var foto = el("div", "etd-foto");
        if (m.gambar) {
          var img = el("img");
          img.src = m.gambar;
          img.alt = m.nama;
          img.loading = "lazy";
          foto.appendChild(img);
        } else {
          foto.appendChild(el("div", "etd-gelas"));
        }
        var isi = el("div", "etd-es-isi");
        isi.appendChild(el("h3", "", m.nama));
        isi.appendChild(el("div", "etd-rp" + (m.harga ? "" : " kosong"), m.harga || "Rp -"));
        kartu.appendChild(foto);
        kartu.appendChild(isi);
        grid.appendChild(kartu);
      });
    }

    var tim = document.getElementById("etd-tim");
    if (tim) {
      ANGGOTA.forEach(function (a) {
        var k = el("div", "etd-anggota");
        var av = el("div", "etd-avatar");
        if (a.foto) {
          var im = el("img");
          im.src = a.foto;
          im.alt = a.nama;
          av.appendChild(im);
        } else {
          av.textContent = (a.nama || "?").trim().charAt(0).toUpperCase();
        }
        k.appendChild(av);
        k.appendChild(el("h3", "", a.nama));
        if (a.keterangan) k.appendChild(el("p", "", a.keterangan));
        tim.appendChild(k);
      });
    }

    Array.prototype.forEach.call(root.querySelectorAll(".etd-pembungkus"), pasangGeser);

    var kurangiGerak = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var pemicu = root.querySelectorAll("a[data-target]");
    Array.prototype.forEach.call(pemicu, function (a) {
      a.addEventListener("click", function (e) {
        var tujuan = document.getElementById(a.getAttribute("data-target"));
        if (!tujuan) return;
        e.preventDefault();
        tujuan.scrollIntoView({ behavior: kurangiGerak ? "auto" : "smooth", block: "start" });
      });
    });

    var tombol = root.querySelectorAll(".etd-menu a");
    var ids = ["etd-home", "etd-info", "etd-harga", "etd-kelompok"];
    function tandai() {
      var aktif = ids[0];
      ids.forEach(function (id) {
        var s = document.getElementById(id);
        if (s && s.getBoundingClientRect().top <= 140) aktif = id;
      });
      var akhir = document.getElementById("etd-kelompok");
      if (akhir && akhir.getBoundingClientRect().bottom <= window.innerHeight + 4) aktif = "etd-kelompok";
      Array.prototype.forEach.call(tombol, function (t) {
        if (t.getAttribute("data-target") === aktif) t.classList.add("aktif");
        else t.classList.remove("aktif");
      });
    }
    window.addEventListener("scroll", tandai, { passive: true });
    window.addEventListener("resize", tandai);
    tandai();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
