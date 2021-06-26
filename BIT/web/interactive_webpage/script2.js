function publish() {
    var el = document.querySelector("p"); //querySelector only retrieves the first element it finds.
    el.innerHTML = "Website published!" //if we want to access different elements of the same class,we specify npr.p.prompt za dva p elem sa istom klasom
}

function refresh() {
    var elem = document.querySelector("#update");
    elem.innerHTML = "Beer Pong: New Olympic Sport-No";
}