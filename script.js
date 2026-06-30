function toggleMenu(menuId){

    let menu = document.getElementById(menuId);

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function updateDateTime(){

    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleString();
}

setInterval(updateDateTime,1000);
updateDateTime();

/* Search Function */
function searchCards(){

    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.textContent.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}
