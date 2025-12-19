//Sticky Navigation bar with color change on scroll
const navBar = document.getElementById("sticky");
const button = document.getElementById("button");
window.addEventListener("scroll", () => {
  if (this.scrollY > 50) {
    navBar.classList.add("bg-teal-600", "text-white", "shadow-lg");
    navBar.classList.remove("bg-violet-100");
    button.classList.add("btn-neutral");
    button.classList.remove("btn-primary");
  } else {
    navBar.classList.remove("bg-teal-600", "text-white", "shadow-lg");
    navBar.classList.add("bg-violet-100");
    button.classList.add("btn-primary");
    button.classList.remove("btn-neutral");
  }
});

//Live Date & Time

const dateTime = () => {
  const timeContainer = document.getElementById("date-time");
  if (timeContainer) {
    const now = new Date();
    const localFormate = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    timeContainer.innerHTML = localFormate;
  }
};

setInterval(dateTime, 1000)
