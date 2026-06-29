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