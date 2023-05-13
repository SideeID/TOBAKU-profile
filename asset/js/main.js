AOS.init();

var typed = new Typed(".typing", {
  strings: [
    "Toko berbagai macam alat dan bahan kue.",
    "Surga Alat dan Bahan Kue di Jombang.",
  ],
  typeSpeed: 100,
  delaySpeed: 300,
  loop: true,
  startDelay: 200,
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyP0dsDXI8N0-I6fueNe2KZxF4Gh2rJkSNKo436GTgynUXTuyEoiL7Tg5CRWtJd6fn-YA/exec";
const form = document.forms["TOBAKU-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
