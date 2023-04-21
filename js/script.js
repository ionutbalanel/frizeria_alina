new SimpleLightbox({ elements: ".gallery-container a" });

AOS.init({
  duration: 900,
  offset: 100,
  once: true,
});

const header = document.querySelector(".navbar");
if (window.innerWidth < 768) {
  header.classList.add("sticky");
}

window.addEventListener("scroll", function () {
  if (window.innerWidth >= 768) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

function show() {
  document.getElementById("side-menu").classList.toggle("shows");
}
function hide() {
  document.getElementById("side-menu").classList.remove("shows");
}

// Servicii de email: Sursa - https://www.emailjs.com/
function send() {
  if (document.getElementById("formular").checkValidity() == false) {
    document.getElementById("formular").reportValidity();
    return;
  }

  var date = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value,
  };

  emailjs.send("service_bfa5ewa", "template_b92gn2h", date).then(
    function (raspuns) {
      alert("Mesajul a fost transmis.");
      document.getElementById("formular").reset();
    },
    function (error) {
      alert("Eroare la transmitere. Contactati programatorul.");
    }
  );
}
