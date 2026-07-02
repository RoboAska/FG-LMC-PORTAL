function toggleMenu(menuId){

    let menu = document.getElementById(menuId);

    let card = menu.closest('.card');

    document.querySelectorAll('.card').forEach(c => {
        if(c !== card){
            c.classList.remove('active');
        }
    });

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

document.addEventListener("DOMContentLoaded", () => {

    const operations =
        document.querySelectorAll(".operations-link").length;

    const trackers =
        document.querySelectorAll(".tracker-link").length;

    const support =
        document.querySelectorAll(".support-link").length;

    const logistics =
        document.querySelectorAll(".logistic-link").length;

    const total =
        operations + trackers + support + logistics;

    document.getElementById("totalLinks").textContent = total;
    document.getElementById("trackerCount").textContent = trackers;
    document.getElementById("supportCount").textContent = support;
    document.getElementById("logisticCount").textContent = logistics;

});

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
