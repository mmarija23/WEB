//ovako mozemo da dodajemo koliko god hocemo elemenata iz niza;
//sa forEach petljom prodjemo kroz niz

var imagesArray = ["https://a-z-animals.com/media/2021/01/mammals-400x300.jpg", "https://i.natgeofe.com/n/bec7bd50-0d57-4982-aeb5-82e5f8184f89/02-machine-saving-animals-nationalgeographic_1977490.jpg", "https://insideclimatenews.org/wp-content/uploads/2021/01/tiger-bronx-zoo_james-devaney-getty-scaled.jpg"];
var galleryDiv = $("<div class='gallery'>");
galleryDiv.appendTo("body");


imagesArray.forEach(function(element) {
    var galleryImg = $("<img>");
    galleryImg.attr("src", element);
    galleryImg.appendTo(".gallery");
})


var newTitle = $("<h1>");
newTitle.text("Amazing Gallery");
$("body").prepend(newTitle);
$(".gallery img:first-child").css("width", "800px");
$(".gallery img:not(:first-child):not(:last-child)").css("width", "600px"); // :not(:first-child):not(:last-child)  Sets middle child elements size
$(".gallery img:last-child").css("width", "400px");