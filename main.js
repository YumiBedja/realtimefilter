 /*global $*/
$(document).ready(function () {
    
function Search(text){
    $(".keyword").each(function(index, element){
        let keyword = $(element).text();
        if(keyword.indexOf(text) === -1){
            $(element).parent().css("display", "none");
        }else{
            $(element).parent().css("display", "block");
        }
    });
}

$("#search-text").on("input", function(event){
    let text = $("#search-text").val();
    if(text === ""){
        $(".item").css("display", "block");
    }else{
        Search(text);
    }
});
});