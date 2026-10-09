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

  function daunJatuh(root) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var kanvas = document.createElement("canvas");
    kanvas.className = "etd-daun";
    root.appendChild(kanvas);
    var c = kanvas.getContext("2d");
    var w = 0, h = 0;
    function ukur() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      kanvas.width = w * dpr;
      kanvas.height = h * dpr;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    ukur();
    window.addEventListener("resize", ukur);

    var warna = ["#0f4a28", "#1b7a43", "#3fae5f", "#7fd69a", "#a6e3b5"];
    var p = [], ring = [], jalan = false, tx = null, ty = null;

    function rand(a, b) { return a + Math.random() * (b - a); }

    function buat(x, y) {
      var kilau = Math.random() < 0.35;
      p.push({
        x: x + rand(-8, 8), y: y + rand(-8, 8),
        vx: rand(-0.5, 0.5), vy: rand(0.2, 0.9),
        s: kilau ? rand(3, 6) : rand(6, 12),
        a: rand(0, 6.28), spin: rand(-0.06, 0.06),
        fase: rand(0, 6.28), umur: 0, maks: kilau ? rand(30, 55) : rand(90, 150),
        warna: warna[Math.floor(Math.random() * warna.length)],
        kilau: kilau
      });
      if (p.length > 160) p.shift();
    }

    function mulai() {
      if (!jalan) { jalan = true; requestAnimationFrame(gambar); }
    }

    function letus(x, y) {
      var n = 14;
      for (var i = 0; i < n; i++) {
        var sudut = (Math.PI * 2 * i) / n + rand(-0.2, 0.2);
        var kec = rand(2, 5.5);
        p.push({
          x: x, y: y,
          vx: Math.cos(sudut) * kec, vy: Math.sin(sudut) * kec,
          s: rand(3, 6), a: rand(0, 6.28), spin: rand(-0.1, 0.1),
          fase: 0, umur: 0, maks: rand(30, 50),
          warna: "#7fd69a", kilau: true, letus: true
        });
      }
      ring.push({ x: x, y: y, umur: 0 });
      mulai();
    }

    function gambar() {
      c.clearRect(0, 0, w, h);
      for (var j = ring.length - 1; j >= 0; j--) {
        var r = ring[j];
        r.umur++;
        if (r.umur > 30) { ring.splice(j, 1); continue; }
        var q = r.umur / 30;
        c.save();
        c.globalAlpha = 1 - q;
        c.strokeStyle = "#7fd69a";
        c.lineWidth = 1 + 3 * (1 - q);
        c.shadowColor = "#3fae5f";
        c.shadowBlur = 14;
        c.beginPath();
        c.arc(r.x, r.y, 8 + q * 44, 0, Math.PI * 2);
        c.stroke();
        c.restore();
      }
      for (var i = p.length - 1; i >= 0; i--) {
        var d = p[i];
        d.umur++;
        if (d.umur > d.maks || d.y > h + 20) { p.splice(i, 1); continue; }
        if (d.letus) {
          d.vx *= 0.93;
          d.vy *= 0.93;
          d.x += d.vx;
          d.y += d.vy;
        } else {
          d.vy += 0.012;
          d.x += d.vx + Math.sin(d.umur * 0.08 + d.fase) * 0.7;
          d.y += d.vy;
        }
        d.a += d.spin;
        var t = d.umur / d.maks;
        var alpha = t < 0.15 ? t / 0.15 : 1 - (t - 0.15) / 0.85;
        c.save();
        c.translate(d.x, d.y);
        c.rotate(d.a);
        c.globalAlpha = Math.max(0, alpha);
        if (d.kilau) {
          var k = d.s * (0.6 + 0.4 * Math.sin(d.umur * 0.5)) * 1.6;
          c.fillStyle = "#d9ffe3";
          c.shadowColor = "#3fae5f";
          c.shadowBlur = 10;
          c.beginPath();
          c.moveTo(0, -k);
          c.quadraticCurveTo(0, 0, k, 0);
          c.quadraticCurveTo(0, 0, 0, k);
          c.quadraticCurveTo(0, 0, -k, 0);
          c.quadraticCurveTo(0, 0, 0, -k);
          c.fill();
        } else {
          c.fillStyle = d.warna;
          c.beginPath();
          c.moveTo(0, -d.s);
          c.quadraticCurveTo(d.s * 0.85, 0, 0, d.s);
          c.quadraticCurveTo(-d.s * 0.85, 0, 0, -d.s);
          c.fill();
          c.strokeStyle = "rgba(255, 255, 255, .35)";
          c.lineWidth = 1;
          c.beginPath();
          c.moveTo(0, -d.s * 0.8);
          c.lineTo(0, d.s * 0.8);
          c.stroke();
        }
        c.restore();
      }
      if (p.length || ring.length) requestAnimationFrame(gambar);
      else { jalan = false; c.clearRect(0, 0, w, h); }
    }

    function gerak(x, y) {
      if (tx === null) { tx = x; ty = y; }
      var dx = x - tx, dy = y - ty;
      var jarak = Math.sqrt(dx * dx + dy * dy);
      if (jarak < 14) return;
      tx = x; ty = y;
      var n = Math.min(3, Math.ceil(jarak / 28));
      for (var i = 0; i < n; i++) buat(x, y);
      mulai();
    }

    window.addEventListener("mousemove", function (e) { gerak(e.clientX, e.clientY); }, { passive: true });
    window.addEventListener("touchstart", function (e) {
      var t = e.touches[0];
      if (t) { tx = t.clientX; ty = t.clientY; }
    }, { passive: true });
    window.addEventListener("touchmove", function (e) {
      var t = e.touches[0];
      if (t) gerak(t.clientX, t.clientY);
    }, { passive: true });
    window.addEventListener("click", function (e) {
      if (!e.clientX && !e.clientY) return;
      letus(e.clientX, e.clientY);
    });
    window.addEventListener("touchend", function () { tx = null; ty = null; }, { passive: true });
    document.addEventListener("mouseleave", function () { tx = null; ty = null; });
  }

  function init() {
    var root = document.getElementById("etd");
    if (!root) return;
    daunJatuh(root);

    if (LOGO) {
      var lh = document.getElementById("etd-logo-home");
      var ln = document.getElementById("etd-logo-nav");
      if (lh) { lh.src = LOGO; lh.style.display = "block"; }
      if (ln) { ln.src = LOGO; ln.style.display = "block"; }
      var li = document.getElementById("etd-logo-intro");
      if (li) { li.src = LOGO; li.style.display = "block"; }
    }

    var grid = document.getElementById("etd-grid-es");
    if (grid) {
      MENU.forEach(function (m, i) {
        var ganjilTerakhir = (MENU.length % 2 === 1 && i === MENU.length - 1);
        var kartu = el("div", "etd-es" + (ganjilTerakhir ? " etd-tengah" : ""));
        kartu.style.setProperty("--i", i);
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
      ANGGOTA.forEach(function (a, i) {
        var k = el("div", "etd-anggota");
        k.style.setProperty("--i", i);
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

    var halaman = ["home", "info", "harga", "kelompok"];
    var pages = {};
    halaman.forEach(function (h) { pages[h] = document.getElementById("etd-" + h); });
    var nav = root.querySelector(".etd-nav");
    var tombolMenu = root.querySelector(".etd-menubtn");
    var tautan = root.querySelectorAll("[data-page]");

    function tutupDrawer() {
      nav.classList.remove("buka");
      tombolMenu.setAttribute("aria-expanded", "false");
    }
    tombolMenu.addEventListener("click", function (e) {
      e.stopPropagation();
      var buka = nav.classList.toggle("buka");
      tombolMenu.setAttribute("aria-expanded", buka ? "true" : "false");
    });
    document.addEventListener("click", function (e) { if (!nav.contains(e.target)) tutupDrawer(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") tutupDrawer(); });

    function tampil(nama) {
      if (!pages[nama]) nama = "home";
      halaman.forEach(function (h) { pages[h].classList.toggle("aktif", h === nama); });
      Array.prototype.forEach.call(tautan, function (t) {
        t.classList.toggle("aktif", t.getAttribute("data-page") === nama);
      });
      window.scrollTo(0, 0);
      tutupDrawer();
    }
    Array.prototype.forEach.call(tautan, function (t) {
      t.addEventListener("click", function (e) {
        e.preventDefault();
        var nama = t.getAttribute("data-page");
        if (location.hash !== "#" + nama) location.hash = nama;
        else tampil(nama);
      });
    });
    window.addEventListener("hashchange", function () { tampil(location.hash.slice(1)); });
    tampil(location.hash.slice(1));

    var intro = document.getElementById("etd-intro");
    var selesai = false;
    function akhiri() {
      if (selesai) return;
      selesai = true;
      document.documentElement.style.overflow = "";
      root.classList.add("siap");
      if (intro) {
        intro.classList.add("selesai");
        setTimeout(function () { intro.style.display = "none"; }, 800);
      }
    }
    if (intro) {
      document.documentElement.style.overflow = "hidden";
      intro.addEventListener("click", akhiri);
      setTimeout(akhiri, kurangiGerak ? 300 : 2800);
    } else {
      akhiri();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
