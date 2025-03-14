/*HAMBURGER MENU*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/*PROJECT PAGE GIF*/
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project) => {
        const img = project.querySelector(".project-image");
        const originalSrc = img.getAttribute("src"); 
        const gifSrc = img.getAttribute("data-gif"); 

        project.addEventListener("mouseenter", () => {
            img.src = gifSrc; 
        });

        project.addEventListener("mouseleave", () => {
            img.src = originalSrc; 
        });
    });
});
/*CONTACT PAGE VALIDATION */
function validateForm() {
    let isValid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        isValid = false;
    }

    return isValid;
}

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    let currentSrc = this.getAttribute("src");
    this.setAttribute("src", currentSrc.includes("sleep-day") ? "assets/sleep-night.png" : "assets/sleep-day.png");

    document.querySelectorAll("p").forEach(p => {
        p.style.color = document.body.classList.contains("dark-mode") ? "white" : "";
    });
});

