const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme", "light");
    }else{
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");
    }

});

window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "light"){
        document.body.classList.add("light-theme");
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});