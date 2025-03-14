/*HAMBURGER MENU*/
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/*PROJECT PAGE GIF*/
document.addEventListener("DOMContentLoaded", function () {
    const projectImages = document.querySelectorAll(".project-image");

    projectImages.forEach((img) => {
        const originalSrc = img.getAttribute("src"); 
        const gifSrc = img.getAttribute("data-gif"); 

        img.addEventListener("mouseenter", () => {
            img.src = gifSrc; 
        });

        img.addEventListener("mouseleave", () => {
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

/*NIGHT MODE*/
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let darkModeBtn = document.getElementById("darkMode");
    let darkModeMobileBtn = document.getElementById("darkModeMobile");

    let currentSrc = darkModeBtn.getAttribute("src");
    let newSrc = currentSrc.includes("sleep-day") ? "assets/sleep-night.png" : "assets/sleep-day.png";

    darkModeBtn.setAttribute("src", newSrc);
    if (darkModeMobileBtn) darkModeMobileBtn.setAttribute("src", newSrc);

    document.querySelectorAll("p").forEach(p => {
        p.style.color = document.body.classList.contains("dark-mode") ? "white" : "";
    });

    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

document.getElementById("darkMode").addEventListener("click", toggleDarkMode);

if (document.getElementById("darkModeMobile")) {
    document.getElementById("darkModeMobile").addEventListener("click", toggleDarkMode);
}


/*PROJECT SLIDER*/
let currentProjectIndex = 1; 

document.addEventListener("DOMContentLoaded", () => {
    const projectContainer = document.querySelector(".project-container");
    const projects = document.querySelectorAll(".project");
    const projectCount = projects.length;

    const firstClone = projects[0].cloneNode(true);
    const lastClone = projects[projectCount - 1].cloneNode(true);

    firstClone.id = "first-clone";
    lastClone.id = "last-clone";

    projectContainer.appendChild(firstClone);
    projectContainer.insertBefore(lastClone, projects[0]);

    const allProjects = document.querySelectorAll(".project");
    projectContainer.style.width = `${allProjects.length * 100}%`;

    projectContainer.style.transform = `translateX(-100%)`;
});

function changeProject(direction) {
    const projectContainer = document.querySelector(".project-container");
    const allProjects = document.querySelectorAll(".project");
    const projectWidth = 100; // Each project takes full width

    currentProjectIndex += direction;
    projectContainer.style.transition = "transform 0.5s ease-in-out";
    projectContainer.style.transform = `translateX(-${currentProjectIndex * projectWidth}%)`;

    setTimeout(() => {
        if (currentProjectIndex === allProjects.length - 1) {
            projectContainer.style.transition = "none";
            currentProjectIndex = 1; // Jump back to first real slide
            projectContainer.style.transform = `translateX(-${currentProjectIndex * projectWidth}%)`;
        }
        if (currentProjectIndex === 0) {
            projectContainer.style.transition = "none";
            currentProjectIndex = allProjects.length - 2; // Jump back to last real slide
            projectContainer.style.transform = `translateX(-${currentProjectIndex * projectWidth}%)`;
        }
    }, 500); 
}
