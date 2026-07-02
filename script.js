function toggleMenu(menuId){

    let menu = document.getElementById(menuId);

    let card = menu.closest('.card');

    document.querySelectorAll('.card').forEach(c => {
        if(c !== card){
            c.classList.remove('active');
        }
    });

    document.getElementById("lastUpdated").textContent =
    "Last Updated: " + new Date().toLocaleDateString();

    if(menu.style.display === "block"){
        menu.style.display = "none";
        card.classList.remove('active');
    } else {
        menu.style.display = "block";
        card.classList.add('active');
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
