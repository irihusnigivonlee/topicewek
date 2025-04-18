// Fungsi untuk toggle menu pada perangkat kecil (responsive)
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
// Fungsi untuk toggle menu pada perangkat kecil (responsive)
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Fungsi untuk toggle submenu saat diklik
function toggleSubMenu(event) {
    const submenu = event.target.nextElementSibling;  // Cari submenu terkait
    if (submenu) {
        submenu.classList.toggle('active');  // Tambah atau hapus kelas active
    }
}

// Menambahkan event listener ke setiap item menu dengan submenu
document.querySelectorAll('li > a').forEach((item) => {
    item.addEventListener('click', function (event) {
        event.preventDefault();  // Mencegah halaman berpindah
        toggleSubMenu(event);
    });
});

