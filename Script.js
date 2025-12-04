function goToPage2() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

function sendBug() {
    const nomor = document.getElementById("waNumber").value;

    if (nomor.trim() === "") {
        alert("Masukkan nomor WhatsApp terlebih dahulu!");
        return;
    }

    // Putar audio bug
    const audio = document.getElementById("bugAudio");
    audio.play();
}