/*function movePlayer(e) {

    $("img").css({
        "left": e.pageX - 50,
        "top": e.pageY - 50
    }, 500)
};
$("body").on("click", movePlayer);
$("button").click(function() {
    $("body").off("click", movePlayer)
}) */

///////////
function movePlayer(e) {

    $("img").css({
        "left": e.pageX - 50,
        "top": e.pageY - 50
    }, 500)
};
$("body").on("click", movePlayer);
$("button").click(function() {
    $("body").off("click", movePlayer);

})