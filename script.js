$(document).ready(function(){

    
    $("#submit").click(function(){
        var search_value = $("#inp").val();
        window.open("https://www.google.com/search?q="+search_value+"");     
    });
    
    $("#pri").click(function(){
        window.print();
        return true;
    });
});