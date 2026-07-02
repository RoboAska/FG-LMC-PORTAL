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

    <footer class="footer">
    <div class="footer-grid">

        <div class="footer-brand">
            <h3>FG LMC Operations Command Center</h3>
            <p>Integrated Operations, Logistics, Warehouse & Resource Management</p>
        </div>

        <div class="footer-status">
            <span class="status-dot"></span>
            <span>System Operational</span>
        </div>

        <div class="footer-info">
            <p>Version 1.0.0</p>
            <p id="lastUpdated"></p>
        </div>
    </div>
</footer>
}
