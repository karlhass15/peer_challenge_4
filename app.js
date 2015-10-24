/**
 * Created by scottbromander on 10/23/15.
 */
var peopleArray = ["Dana", "Pui", "Kelly", "Sam"];

var indexTracker = 0;

$(document).ready(function(){
    createCarousel(peopleArray);

    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);
    //updateMain();
    updateIndexPoints();
});

function createCarousel(array){
    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();
    createNavButtons($el);
    createIndexPoints(array, $el);
}
function createNavButtons($el){
    $el.append("<div id='prev' class='nav-button'>Prev</div>");
    $el.append("<div id='next' class='nav-button'>Next</div>");
}
function nextSlide(){
    indexTracker++;
    if(indexTracker >= peopleArray.length){
        indexTracker = 0;
    }
    //updateMain();
    updateIndexPoints();
}
function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length - 1;
    }
    //updateMain();
    updateIndexPoints();
}

function createIndexPoints(array, $el){
    //create something visual, Divs will work
    for(var i = 0; i < array.length; i++){
        //we need i, 1 for each element
        $el.append("<div class='index-point' id='index" + i + "'></div>")
    }
}
function updateIndexPoints(){
    for(var i = 0; i < peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");
        //added updateMain function to this one since it follows the same calls as updateIndexPoints
        $("#mainContent").text(peopleArray[indexTracker]);
        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
        }
    }
}

//function updateMain(){
   // $("#mainContent").text(peopleArray[indexTracker]);
//}

