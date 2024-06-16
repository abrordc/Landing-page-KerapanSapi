const preloader = document.querySelector("#preloader");
const dateTime = document.getElementById("time");
const button = document.getElementById("simpan");
const audio = document.getElementById("audio");
audio.style.visibility = "hidden";
if (preloader) {
    window.addEventListener("load", () => {
        preloader.remove();
    });
}
const menu = document.querySelector(".menu");
menu.addEventListener("click", function (e) {
    const targetMenu = e.target;
    if (targetMenu.classList.contains("nav-link")) {
        const menuLinkActive = document.querySelector("ul li a.active");
        if (
            menuLinkActive !== null &&
            targetMenu.getAttribute("href") !==
                menuLinkActive.getAttribute("href")
        ) {
            menuLinkActive.classList.remove("active");
        }
        targetMenu.classList.add("active");
    }
});

const title = document.title;

window.addEventListener("blur", () => {
    document.title = "jangan lupa balik ya...👍";
});

window.addEventListener("focus", () => {
    document.title = title;
});

button.addEventListener("click", function () {
    const combo = dateTime.value;
    const inputUsers = new Date(combo).getTime();

    const waktu = setInterval(function () {
        const sekarang = new Date().getTime();
        const selesai = inputUsers - sekarang;

        const hari = Math.floor(selesai / (1000 * 60 * 60 * 24));
        const jam = Math.floor(
            (selesai % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const menit = Math.floor((selesai % (1000 * 60 * 60)) / (1000 * 60));
        const detik = Math.floor((selesai % (1000 * 60)) / 1000);

        const alarm = document.getElementById("alarm");
        alarm.innerHTML =
            "waktu anda tinggal : " +
            hari +
            " hari " +
            jam +
            " jam " +
            menit +
            " menit " +
            detik +
            " detik lagi! ";

        if (selesai < 0) {
            clearInterval(waktu);
            alarm.innerHTML = "waktu anda telah habis";
            audio.play();
            window.reset() 
        }
    }, 1000);
});
