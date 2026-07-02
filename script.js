// ==========================
// CARD MENU TOGGLE
// ==========================

function toggleMenu(menuId){

    const menu = document.getElementById(menuId);

    if(!menu) return;

    const card = menu.closest('.card');

    document.querySelectorAll('.card').forEach(c => {

        if(c !== card){
            c.classList.remove('active');
        }

    });

    card.classList.toggle('active');
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

    document.querySelectorAll(".card").forEach(card => {

        const title =
            card.querySelector("h3")?.textContent.toLowerCase() || "";

        const desc =
            card.querySelector("p")?.textContent.toLowerCase() || "";

        card.style.display =
            title.includes(filter) || desc.includes(filter)
            ? ""
            : "none";
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

document.querySelectorAll('.submenu a').forEach(link => {
    link.addEventListener('click', function(e){
        e.stopPropagation();
    });
});
