$('.switch').click(function() {
    if ($('#checkbox').is(":checked")) {
        $("nav").removeClass("day");
        $("nav").addClass("night");
        $("#resume").removeClass("day");
        $("#resume").addClass("night");
        $("#projects").removeClass("day");
        $("#projects").addClass("night");
        $("#about").removeClass("day");
        $("#about").addClass("night");
    } else {
        $("nav").removeClass("night");
        $("nav").addClass("day");
        $("#resume").removeClass("night");
        $("#resume").addClass("day");
        $("#projects").removeClass("night");
        $("#projects").addClass("day");
        $("#about").removeClass("night");
        $("#about").addClass("day");
    }
});