var main = function() {
    
    $(".login").click(function() {
        $(".dropdown-menu").toggle();
    });
    
    $( "#accordion" ).accordion();
    $(".banner").unslider();
};

$(document).ready(main);