// common.js
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

// Smooth scrolling for research page links
// $(document).ready(function() {
//     $('a[href^="#"]').on('click', function(event) {
//         var target = $(this.getAttribute('href'));
//         if( target.length ) {
//             event.preventDefault();
//             $('html, body').stop().animate({
//                 scrollTop: target.offset().top - 100
//             }, 1000);
//         }
//     });
// });

// Highlight active section in research nav
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance + 200) {
            $('#research-nav ul li a.active').removeClass('active');
            $('#research-nav ul li a').eq(i).addClass('active');
        }
    });
}).scroll();