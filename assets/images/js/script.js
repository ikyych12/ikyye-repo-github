// Fungsi untuk menambahkan item buku tamu
document.querySelector('#bukutamu-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil data dari form
    const nama = document.querySelector('#nama').value;
    const email = document.querySelector('#email').value;
    const pesan = document.querySelector('#pesan').value;

    if (nama === '' || email === '' || pesan === '') {
        alert('Semua kolom harus diisi!');
        return;
    }

    // Menampilkan pesan sukses
    const bukuTamuContainer = document.querySelector('.bukutamu-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('bukutamu-entry');
    newEntry.innerHTML = `
        <h4>${nama}</h4>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
    bukuTamuContainer.appendChild(newEntry);

    // Reset form
    document.querySelector('#bukutamu-form').reset();
    alert('Terima kasih atas pesan Anda!');
});

// Efek Galeri: Menampilkan gambar dengan hover
const galeriImages = document.querySelectorAll('.galeri-item img');
galeriImages.forEach(image => {
    image.addEventListener('mouseover', function () {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 0.3s ease';
    });
    image.addEventListener('mouseout', function () {
        image.style.transform = 'scale(1)';
    });
});

// Fungsi login form (verifikasi sederhana)
document.querySelector('#login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Ambil data login
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Cek validitas (ini hanya contoh, seharusnya menggunakan database)
    if (username === 'admin' && password === 'admin123') {
        alert('Login sukses!');
        window.location.href = 'dashboard.html'; // Redireksi ke dashboard
    } else {
        alert('Username atau password salah!');
    }
});

// Fungsi untuk mode gelap/terang
const toggleDarkMode = document.querySelector('#dark-mode-toggle');
toggleDarkMode.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

// Cek mode gelap yang disimpan
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleDarkMode.checked = true;
}

// Fungsi untuk menampilkan data guru secara dinamis
const guruData = [
    {
        name: 'Bapak Ahmad Yani',
        subject: 'Matematika',
        photo: 'guru1.jpg',
    },
    {
        name: 'Ibu Siti Aminah',
        subject: 'IPA',
        photo: 'guru2.jpg',
    },
    {
        name: 'Bapak Muhammad Ali',
        subject: 'Bahasa Indonesia',
        photo: 'guru3.jpg',
    }
];

const guruContainer = document.querySelector('.guru-container');

guruData.forEach(guru => {
    const guruItem = document.createElement('div');
    guruItem.classList.add('guru-item');
    guruItem.innerHTML = `
        <img src="images/${guru.photo}" alt="${guru.name}" class="guru-photo">
        <h3>${guru.name}</h3>
        <p>${guru.subject}</p>
    `;
    guruContainer.appendChild(guruItem);
});

// Efek smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
