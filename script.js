function toggleMenu(menuId){

    const menu = document.getElementById(menuId);

    if(!menu) return;

    const card = menu.closest('.card');

    document.querySelectorAll('.card').forEach(c => {
        if(c !== card){
            c.classList.remove('active');
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
const lastUpdated = document.getElementById("lastUpdated");

if(lastUpdated){
    lastUpdated.textContent =
        "Last Updated: " +
        new Date().toLocaleDateString();
}
