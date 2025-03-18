(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    
    
    // ecoCarousel slide 
    document.addEventListener("DOMContentLoaded", function () {
        function updateCarouselSettings() {
            let interval;
            let carousel = document.querySelector("#ecoCarousel");
    
            if (!carousel) return;
    
            // Suppression des classes de transition avant d'ajouter la bonne
            carousel.classList.remove("carousel-fade", "carousel-zoom", "carousel-rotate");
    
            // Définition de la vitesse et du type de transition
            if (window.innerWidth < 576) {
                // Mobile - Zoom
                interval = 2000;
                carousel.classList.add("carousel-zoom");
            } else if (window.innerWidth < 992) {
                // Tablette - Rotation
                interval = 3000;
                carousel.classList.add("carousel-rotate");
            } else {
                // PC - Glisser (par défaut Bootstrap)
                interval = 5000;
            }
    
            // Reconfigurer le carrousel Bootstrap
            let bsCarousel = new bootstrap.Carousel(carousel, {
                interval: interval,
                ride: "carousel"
            });
        }
    
        updateCarouselSettings(); // Appliquer les paramètres au chargement
        window.addEventListener("resize", updateCarouselSettings); // Mettre à jour lors du redimensionnement
    });
    
    
    

    // Client carousel
    $(".client-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 90,
        dots: false,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Main News carousel
    $(".main-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        center: true,
    });


    // Tranding carousel
    $(".tranding-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ]
    });

        
    
    

    


    // Testimonials carousel
    $(document).ready(function () {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    });
    
    // visite 237 carousel
    $(document).ready(function () {
        var owl = $(".image-carousel");
    
        owl.owlCarousel({
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            loop: true,
            margin: 30,
            dots: false, // On désactive les dots
            nav: false, // On désactive la navigation standard d'Owl
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
    
        // Boutons de navigation personnalisés
        $("#prev-slide").click(function () {
            owl.trigger("prev.owl.carousel");
        });
    
        $("#next-slide").click(function () {
            owl.trigger("next.owl.carousel");
        });
    });
    


    // carousel produit
    $(document).ready(function () {
        $(".carousel-item-4").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 30,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                '<i class="fa fa-angle-right" aria-hidden="true"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    });




   
    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");
        counters.forEach(counter => {
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const current = +counter.innerText;
                const increment = target / 200; // La vitesse de l'animation
    
                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.innerText = target;
                }
            };
    
            updateCounter();
        });
    });
    
    
    document.querySelectorAll('.product-image').forEach(item => {
        let isMouseDown = false;
        let startX, startY, scrollLeft, scrollTop;
    
        item.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            item.classList.add('zoomed'); // Ajouter la classe de zoom lors du clic
            startX = e.pageX - item.offsetLeft;
            startY = e.pageY - item.offsetTop;
            scrollLeft = item.scrollLeft;
            scrollTop = item.scrollTop;
            item.style.cursor = 'grabbing'; // Changer le curseur quand on clique
        });
    
        item.addEventListener('mouseleave', () => {
            isMouseDown = false;
            item.classList.remove('zoomed'); // Supprimer le zoom si on quitte l'image
            item.style.cursor = 'grab'; // Réinitialiser le curseur
        });
    
        item.addEventListener('mouseup', () => {
            isMouseDown = false;
            item.classList.remove('zoomed'); // Supprimer la classe de zoom après le relâchement
            item.style.cursor = 'grab';
        });
    
        item.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
            const x = e.pageX - item.offsetLeft;
            const y = e.pageY - item.offsetTop;
            const walkX = (x - startX) * 3; // Facteur de déplacement horizontal
            const walkY = (y - startY) * 3; // Facteur de déplacement vertical
            item.scrollLeft = scrollLeft - walkX;
            item.scrollTop = scrollTop - walkY;
        });
    });
    
    
    // Sélection de tous les produits
    const productItems = document.querySelectorAll('.product-item');
    
    // Parcours des produits pour ajouter un délai d'animation
    productItems.forEach((item, index) => {
        item.style.setProperty('--animation-delay', `${index * 0.2}s`); // Décalage de 0.2s entre chaque produit
        item.classList.add('animated'); // Classe pour déclencher l'animation
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.setProperty('--animation-delay', `${entry.target.dataset.index * 0.2}s`);
                entry.target.classList.add('animated');
            }
        });
    });
    
    productItems.forEach((item, index) => {
        item.dataset.index = index; // Assigner un index pour le délai
        observer.observe(item); // Observer chaque produit
    });

})(jQuery);



document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 200; // La vitesse de l'animation

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});


document.querySelectorAll('.product-image').forEach(item => {
    let isMouseDown = false;
    let startX, startY, scrollLeft, scrollTop;

    item.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        item.classList.add('zoomed'); // Ajouter la classe de zoom lors du clic
        startX = e.pageX - item.offsetLeft;
        startY = e.pageY - item.offsetTop;
        scrollLeft = item.scrollLeft;
        scrollTop = item.scrollTop;
        item.style.cursor = 'grabbing'; // Changer le curseur quand on clique
    });

    item.addEventListener('mouseleave', () => {
        isMouseDown = false;
        item.classList.remove('zoomed'); // Supprimer le zoom si on quitte l'image
        item.style.cursor = 'grab'; // Réinitialiser le curseur
    });

    item.addEventListener('mouseup', () => {
        isMouseDown = false;
        item.classList.remove('zoomed'); // Supprimer la classe de zoom après le relâchement
        item.style.cursor = 'grab';
    });

    item.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - item.offsetLeft;
        const y = e.pageY - item.offsetTop;
        const walkX = (x - startX) * 3; // Facteur de déplacement horizontal
        const walkY = (y - startY) * 3; // Facteur de déplacement vertical
        item.scrollLeft = scrollLeft - walkX;
        item.scrollTop = scrollTop - walkY;
    });
});


// Sélection de tous les produits
const productItems = document.querySelectorAll('.product-item');

// Parcours des produits pour ajouter un délai d'animation
productItems.forEach((item, index) => {
    item.style.setProperty('--animation-delay', `${index * 0.2}s`); // Décalage de 0.2s entre chaque produit
    item.classList.add('animated'); // Classe pour déclencher l'animation
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.setProperty('--animation-delay', `${entry.target.dataset.index * 0.2}s`);
            entry.target.classList.add('animated');
        }
    });
});

productItems.forEach((item, index) => {
    item.dataset.index = index; // Assigner un index pour le délai
    observer.observe(item); // Observer chaque produit
});



