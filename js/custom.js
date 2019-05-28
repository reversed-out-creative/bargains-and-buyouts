$(function(){
    // On page load, check which navbar class should display
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".navigation").addClass('scroll');
        $("#blueLogo").removeClass("inactive");
        $("#logo").addClass("inactive");
        $("#blueMenu").removeClass("inactive");
        $("#menu").addClass("inactive");
    } else {
        $(".navigation").removeClass('scroll');
        $("#blueLogo").addClass("inactive");
        $("#logo").removeClass("inactive");
        $("#blueMenu").addClass("inactive");
        $("#menu").removeClass("inactive");
    }
    // Toggle Navbar Class by scrolling
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".navigation").addClass('scroll');
            $("#blueLogo").removeClass("inactive");
            $("#logo").addClass("inactive");
            $("#blueMenu").removeClass("inactive");
            $("#menu").addClass("inactive");
        } else {
            $(".navigation").removeClass('scroll');
            $("#blueLogo").addClass("inactive");
            $("#logo").removeClass("inactive");
            $("#blueMenu").addClass("inactive");
            $("#menu").removeClass("inactive");
        }
    });

    $(".nav-menu").click(function() {
        $('.side-menu').toggleClass("active");
    });
    $("#exit").click(function () {
        $('.side-menu').toggleClass("active");
    });

});