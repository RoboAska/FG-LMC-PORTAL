// ==========================
// CARD MENU TOGGLE
// ==========================

function toggleMenu(menuId){

    const menu = document.getElementById(menuId);

    if(!menu) return;

    const card = menu.closest('.card');

    if(menu.style.display === "block"){

        menu.style.display = "none";
        card.classList.remove('active');

    }else{

        menu.style.display = "block";
        card.classList.add('active');

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

    const filter = document
        .getElementById("searchInput")
        .value
        .toLowerCase();
    
// Allow submenu links to be clicked
document.querySelectorAll('.submenu a').forEach(link => {
    link.addEventListener('click', function(e){
        e.stopPropagation();
    });
});
