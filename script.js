let dataAbsensi = JSON.parse(localStorage.getItem("absensi")) || [];
let user = localStorage.getItem("user");

// LOGIN
function login() {
    const username = document.getElementById("username").value;
    if (!username) {
        alert("Masukkan nama!");
        return;
    }
    localStorage.setItem("user", username);
    location.reload();
}

// LOGOUT
function logout() {
    localStorage.removeItem("user");
    location.reload();
}

// TAMBAH DATA
function addData() {
    const no = document.getElementById("no").value;
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const absen = document.getElementById("absen").value;
    const nilai = document.getElementById("nilai").value;

    if (!no || !nama || !kelas || !absen || !nilai) {
        alert("Lengkapi semua data!");
        return;
    }

    dataAbsensi.push({ no, nama, kelas, absen, nilai });
    localStorage.setItem("absensi", JSON.stringify(dataAbsensi));
    renderTable();

    document.getElementById("no").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";
    document.getElementById("absen").value = "";
    document.getElementById("nilai").value = "";
}

// TAMPILKAN TABEL
function renderTable() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    dataAbsensi.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.no}</td>
                <td>${item.nama}</td>
                <td>${item.kelas}</td>
                <td>${item.absen}</td>
                <td>${item.nilai}</td>
            </tr>
        `;
    });
}

// CEK LOGIN
if (user) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("absenBox").classList.remove("hidden");
    document.getElementById("welcome").innerText = "Login sebagai: " + user;
}

renderTable();
