const menu = document.querySelectorAll(".menu");

const nama = document.getElementById("nama");
const kelas = document.getElementById("kelas");

const progres = document.getElementById("progres");
const aktifitas = document.getElementById("aktifitas");
const dokumen = document.getElementById("dokumen");
const statistik = document.getElementById("statistik");

const welcome = document.querySelector(".welcome");

// Menghapus warna sebelumnya
function resetWarna() {
    progres.classList.remove("highlight-pink");
    aktifitas.classList.remove("highlight-pink");
    dokumen.classList.remove("highlight-pink");
    statistik.classList.remove("highlight-pink");
}

// Fungsi scroll
function scrollKe(element) {
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Fungsi tombol menu
menu.forEach(function(item) {

    item.addEventListener("click", function(e) {

        e.preventDefault();

        menu.forEach(function(link) {
            link.classList.remove("active");
        });

        this.classList.add("active");

        resetWarna();

        const halaman = this.dataset.page;

        // HOME
        if (halaman === "home") {

            nama.textContent = "Nama Mahasiswa";
            kelas.textContent = "Kelas SI-3X";

            scrollKe(document.querySelector(".header"));

        }

        // MAHASISWA
        else if (halaman === "mahasiswa") {

            nama.textContent = "Gadis Umayya Rani";

            scrollKe(welcome);

        }

        // KELAS
        else if (halaman === "kelas") {

            kelas.textContent = "Kelas SI-3E";

            

        }

        // AKTIFITAS
        else if (halaman === "aktifitas") {

            progres.classList.add("highlight-pink");
            aktifitas.classList.add("highlight-pink");

            

        }

        // STATISTIK
        else if (halaman === "statistik") {
            statistik.classList.add("highlight-pink");
           

        }

        // DOKUMEN
        else if (halaman === "dokumen") {

            dokumen.classList.add("highlight-pink");

            scrollKe(dokumen);

        }

        // SETTINGS
        else if (halaman === "settings") {

            scrollKe(document.querySelector(".header"));

        }

        // SIGN OUT
        else if (halaman === "signout") {
            const konfirmasi = confirm("Yakin mau Sign Out, Gadis?");

            if (konfirmasi) {
        alert("Kamu berhasil Sign Out!");
        }

    return;
}

        });

    });

// FITUR PENCARIAN
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keydown", function(e) {

        // Pencarian hanya berjalan setelah tekan Enter
        if (e.key !== "Enter") return;

        const kata = this.value.toLowerCase().trim();

        const daftar = [
            {
                kata: ["kelas", "matakuliah", "pendaftar"],
                elemen: progres
            },
            {
                kata: ["aktifitas", "aktivitas", "perkuliahan"],
                elemen: aktifitas
            },
            {
                kata: ["dokumen", "lampiran", "tugas"],
                elemen: dokumen
            },
            {
                kata: ["statistik"],
                elemen: statistik
            }
        ];

        // Hapus warna pencarian sebelumnya
        daftar.forEach(item => {
            item.elemen.classList.remove("search-highlight");
        });

        if (kata === "") return;

        const hasil = daftar.find(item =>
            item.kata.some(k => k.includes(kata) || kata.includes(k))
        );

        if (hasil) {
            hasil.elemen.classList.add("search-highlight");

            hasil.elemen.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        } else {
            alert("Bagian yang dicari tidak ditemukan!");
        }
    });
}