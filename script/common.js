function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // Add event listener after opening the sidebar
    setTimeout(() => {
        document.addEventListener('click', closeSidebarOnClickOutside);
    }, 0);
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // Remove event listener after closing the sidebar
    document.removeEventListener('click', closeSidebarOnClickOutside);
}

function closeSidebarOnClickOutside(event) {
    var sidebar = document.getElementById("mySidebar");
    var openBtn = document.querySelector(".openbtn");
    
    if (!sidebar.contains(event.target) && event.target !== openBtn) {
        closeNav();
    }
}

// Add this event listener to prevent immediate closure when clicking the open button
document.querySelector(".openbtn").addEventListener('click', function(event) {
    event.stopPropagation();
});