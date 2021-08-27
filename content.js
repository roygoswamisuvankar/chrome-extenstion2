$("a").css({
    "background-color" : "pink"
})
$("h1").css({
    "color" : "white",
    "font-weight" : "blod"
})
$("div").css({
    "background-color" : "tomato",
    "color" : "blue"
})
var print_button = $('<input/>').attr({ type: 'button', name:'btn1', class : 'btn1' , value:'print windows' });
$("p").append(print_button);

$(".btn1").click(function(){
    window.print();
});
$("h1").html("Suvankar Roy Goswami");