// ==========================
// CARD MENU TOGGLE
// ==========================

function toggleMenu(menuId) {

    const menu = document.getElementById(menuId);

    if (!menu) return;

    const card = menu.closest(".card");

    // If this menu is already open, close it
    if (menu.style.display === "grid") {
        menu.style.display = "none";
        card.classList.remove("active");
        return;
    }

    // Close all other menus
    document.querySelectorAll(".submenu").forEach(sub => {
        sub.style.display = "none";

        const parentCard = sub.closest(".card");
        if (parentCard) {
            parentCard.classList.remove("active");
        }
    });

    // Open selected menu
    menu.style.display = "grid";
    card.classList.add("active");
}

// ==========================
// DATE & TIME
// ==========================

function updateDateTime(){

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    const dateTime = document.getElementById("datetime");

    if(dateTime){
        dateTime.innerHTML = now.toLocaleString("en-US", options);
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ==========================
// SEARCH FUNCTION
// ==========================

function searchCards(){

    const filter = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const desc = card.querySelector("p")?.textContent.toLowerCase() || "";

        if(title.includes(filter) || desc.includes(filter)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }
    });
}

// ==========================
// ALLOW LINKS TO BE CLICKED
// ==========================

document.querySelectorAll('.submenu a').forEach(link => {

    link.addEventListener('click', function(e){

        e.stopPropagation();

    });

});
