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

setInterval(dateTime, 1000);

//Registration Form Validation
const regiForm = document.getElementById("registration");

if (regiForm) {
  document.addEventListener("submit", (e) => {
    e.preventDefault(); // form defalut
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
   

    let isValid = true;
    let errorMessage = "";

    if (email === "") {
      isValid = false;
      errorMessage = errorMessage + "Email Is Required. \n";
    }

    if (email) {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const validPattern = pattern.test(email);
      if (!validPattern) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
      }
    }

    if (password === "") {
      errorMessage += "Password is required.\n";
      isValid = false;
    }
    if (isValid) {
      alert("Form Submitted Successfully!");
      regiForm.reset();
    } else {
      alert(errorMessage);
    }
  });
}

//Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  document.addEventListener("submit", (e) => {
    e.preventDefault(); // form defalut
    const inputName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (inputName === "") {
      isValid = false;
      errorMessage = errorMessage + "Name is required.\n";
    }

    if (email === "") {
      isValid = false;
      errorMessage = errorMessage + "Email Is Required. \n";
    }

    if (email) {
      const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const validPattern = pattern.test(email);
      if (!validPattern) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
      }
    }

    if (address === "") {
      errorMessage += "Address is required.\n";
      isValid = false;
    }

    if (message === "") {
      errorMessage += "Message cannot be empty.\n";
      isValid = false;
    }

    if (isValid) {
      alert("Form Submitted Successfully!");
      contactForm.reset();
    } else {
      alert(errorMessage);
    }
  });
}
