const preloader = document.querySelector("#preloader");
if (preloader) {
    window.addEventListener("load", () => {
        preloader.remove();
        let tl = gsap.timeline({ defaults: { duration: 2, ease: "none" } });
        gsap.config({ trialWarn: false });
        tl.to("#dc", {
            duration: 5,
            scrambleText: {
                text: "Kerapan sapi adalah tradisi balap sapi asal Madura,Jawa Timur, di mana dua ekor sapi menarik kereta kayu dalam perlombaan sepanjang 100 meter. Sebagai bagian dari festival adat, acara ini memiliki makna budaya mendalam dan menjadi ajang prestise bagi pemilik sapi. Sapi-sapi dilatih intensif sebelum perlombaan, dihias dengan warna cerah dan ornamen tradisional pada hari perlombaan. Penilaian pemenang didasarkan pada kecepatan dan kekompakan tim.",
                chars: "lowerCase",
                revealDelay: 0.5,
                newClass: "pdc",
                tweenLength: false
            }
        });
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
