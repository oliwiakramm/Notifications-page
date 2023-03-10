const readBtn = document.querySelector(".readBtn");
const notifNumber = document.querySelector(".notif__num");

readBtn.addEventListener("click", function () {
  const unreadNotif = document.querySelectorAll(".unread");
  const dots = document.querySelectorAll(".dot");

  notifNumber.textContent = "0";
  unreadNotif.forEach((notif) => {
    notif.classList.remove("unread");
  });
  dots.forEach((dot) => {
    dot.remove();
  });
});
