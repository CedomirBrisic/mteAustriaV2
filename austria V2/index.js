$(document).ready(function () {

    $('#anime-banners-carousel').carousel()
    $('#bestesellers-carousel').carousel()
    $('#vesti-carousel').carousel()



    // ------------------------- ACCORDION BANNERS -------------------------
    // ------------------------- ACCORDION BANNERS -------------------------
    // ------------------------- ACCORDION BANNERS -------------------------


    $(".accordion-banner-box-1").mouseenter(function () {
        $(".accordion-banner-1").removeClass("hide")
        $(".accordion-banner-2").removeClass("show")
        $(".accordion-banner-3").removeClass("show")
        $(".accordion-banner-4").removeClass("show")
        $(".accordion-banner-2").addClass("hide")
        $(".accordion-banner-3").addClass("hide")
        $(".accordion-banner-4").addClass("hide")
        $(".accordion-banner-1").addClass("show")


        $(".accordion-banner-box-1").css("width", "40%")
        $(".accordion-banner-box-2").css("width", "20%")
        $(".accordion-banner-box-3").css("width", "20%")
        $(".accordion-banner-box-4").css("width", "20%")


        $(".active-banner").removeClass("show-txt")
        $(".active-banner").addClass("hide-txt")
        $(".active-banner-1").removeClass("hide-txt")
        $(".active-banner-1").addClass("show-txt")

        $(".unactive-banner").removeClass("hide-txt")
        $(".unactive-banner").addClass("show-txt")
        $(".unactive-banner-1").removeClass("show-txt")
        $(".unactive-banner-1").addClass("hide-txt")


        $(".active-accordion-banner-button").removeClass("show")
        $(".active-accordion-banner-button").addClass("hide")
        $(".active-accordion-banner-button-1").removeClass("hide")
        $(".active-accordion-banner-button-1").addClass("show")

    })

    $(".accordion-banner-box-2").mouseenter(function () {
        $(".accordion-banner-1").removeClass("show")
        $(".accordion-banner-2").removeClass("hide")
        $(".accordion-banner-3").removeClass("show")
        $(".accordion-banner-4").removeClass("show")
        $(".accordion-banner-1").addClass("hide")
        $(".accordion-banner-2").addClass("show")
        $(".accordion-banner-3").addClass("hide")
        $(".accordion-banner-4").addClass("hide")

        $(".accordion-banner-box-1").css("width", "20%")
        $(".accordion-banner-box-2").css("width", "40%")
        $(".accordion-banner-box-3").css("width", "20%")
        $(".accordion-banner-box-4").css("width", "20%")

        $(".active-banner").removeClass("show-txt")
        $(".active-banner").addClass("hide-txt")
        $(".active-banner-2").removeClass("hide-txt")
        $(".active-banner-2").addClass("show-txt")

        $(".unactive-banner").removeClass("hide-txt")
        $(".unactive-banner").addClass("show-txt")
        $(".unactive-banner-2").removeClass("show-txt")
        $(".unactive-banner-2").addClass("hide-txt")

        $(".active-accordion-banner-button").removeClass("show")
        $(".active-accordion-banner-button").addClass("hide")
        $(".active-accordion-banner-button-2").removeClass("hide")
        $(".active-accordion-banner-button-2").addClass("show")
    })

    $(".accordion-banner-box-3").mouseenter(function () {
        $(".accordion-banner-1").removeClass("show")
        $(".accordion-banner-2").removeClass("show")
        $(".accordion-banner-3").removeClass("hide")
        $(".accordion-banner-4").removeClass("show")
        $(".accordion-banner-1").addClass("hide")
        $(".accordion-banner-2").addClass("hide")
        $(".accordion-banner-3").addClass("show")
        $(".accordion-banner-4").addClass("hide")

        $(".accordion-banner-box-1").css("width", "20%")
        $(".accordion-banner-box-2").css("width", "20%")
        $(".accordion-banner-box-3").css("width", "40%")
        $(".accordion-banner-box-4").css("width", "20%")

        $(".active-banner").removeClass("show-txt")
        $(".active-banner").addClass("hide-txt")
        $(".active-banner-3").removeClass("hide-txt")
        $(".active-banner-3").addClass("show-txt")

        $(".unactive-banner").removeClass("hide-txt")
        $(".unactive-banner").addClass("show-txt")
        $(".unactive-banner-3").removeClass("show-txt")
        $(".unactive-banner-3").addClass("hide-txt")


        $(".active-accordion-banner-button").removeClass("show")
        $(".active-accordion-banner-button").addClass("hide")
        $(".active-accordion-banner-button-3").removeClass("hide")
        $(".active-accordion-banner-button-3").addClass("show")
    })

    $(".accordion-banner-box-4").mouseenter(function () {
        $(".accordion-banner-1").removeClass("show")
        $(".accordion-banner-2").removeClass("show")
        $(".accordion-banner-3").removeClass("show")
        $(".accordion-banner-4").removeClass("hide")
        $(".accordion-banner-1").addClass("hide")
        $(".accordion-banner-2").addClass("hide")
        $(".accordion-banner-3").addClass("hide")
        $(".accordion-banner-4").addClass("show")

        $(".accordion-banner-box-1").css("width", "20%")
        $(".accordion-banner-box-2").css("width", "20%")
        $(".accordion-banner-box-3").css("width", "20%")
        $(".accordion-banner-box-4").css("width", "40%")

        $(".active-banner").removeClass("show-txt")
        $(".active-banner").addClass("hide-txt")
        $(".active-banner-4").removeClass("hide-txt")
        $(".active-banner-4").addClass("show-txt")

        $(".unactive-banner").removeClass("hide-txt")
        $(".unactive-banner").addClass("show-txt")
        $(".unactive-banner-4").removeClass("show-txt")
        $(".unactive-banner-4").addClass("hide-txt")


        $(".active-accordion-banner-button").removeClass("show")
        $(".active-accordion-banner-button").addClass("hide")
        $(".active-accordion-banner-button-4").removeClass("hide")
        $(".active-accordion-banner-button-4").addClass("show")
    })





    // ------------------- VESTI CAROUSEL ------------------------------
    // ------------------- VESTI CAROUSEL ------------------------------
    // ------------------- VESTI CAROUSEL ------------------------------



    $(".owl-carousel").owlCarousel({
        items: 4,
        // margin: 50,
        loop: true,
        // center: true,
        nav: true,
        fluidSpeed: true,
        animateOut: "linear",
        animateIn: "linear",
        // autoplay: true,
        // autoplayHovercomplete: true,
        fluidSpeed: true,
        slideTransition: 'linear',
        // autoplaySpeed: 3200,
        // autoplayTimeout: 3200,
        slideBy: 1,
        dots: true

    });
});