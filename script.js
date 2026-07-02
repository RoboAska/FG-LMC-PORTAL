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

            const submenu = c.querySelector('.submenu');

            if(submenu){
                submenu.style.display = "none";
            }
        }

    });

    if(menu.style.display === "block"){

        menu.style.display = "none";
        card.classList.remove('active');

    }else{

        menu.style.display = "block";
        card.classList.add('active');

    }
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

    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }

    });
}
