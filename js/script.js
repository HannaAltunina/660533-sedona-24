var link = document.querySelector(".search-link");
var popup = document.querySelector(".modal-search");
var form = document.querySelector(".booking-form");
var checkIn = popup.querySelector("[name=check-in-date]");
var checkOut = popup.querySelector("[name=check-out-date]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  checkIn.focus();
});

form.addEventListener("submit", function(evt) {
  if (!checkIn.value || !checkOut.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
  }
});
