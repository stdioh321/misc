const dropdown = document.querySelector(".dropdown");
if (dropdown) setTimeout(() => { dropdown.classList.add("active") }, 150);
document.addEventListener("click", (ev1) => {
    // document.querySelectorAll(".dropdown").forEach(it => { it.classList.remove("active") });
    const isDropdown = ev1.target.matches(".dropdown");
    console.log(ev1.target);
    document.querySelectorAll(".dropdown").forEach(it => {
        if (!isDropdown && ev1.target.closest(".dropdown")) return;
        if (it == ev1.target) it.classList.toggle("active");
        else it.classList.remove("active");
    });



});