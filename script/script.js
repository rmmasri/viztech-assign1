$(".controls .button").on("click",function(d){
    d.preventDefault();

    var idValue = $(d.target).attr('id');

    $('.dev-log')
        .append("<p>Clicked " + idValue + "</p>");
});

$(":radio,:checkbox").on("change",function(e){
    var idValue = $(e.target).attr('id');

    $('.dev-log')
        .append("<p>Clicked " + idValue + "</p>");
});

$("#selectinput").on("change",function(e){
    var value = $(e.target).val();

    $('.dev-log')
        .append("<p>Clicked selectinput &gt; " + value + "</p>");
});

$("#textinput").on("input",function(e){
    var value = $(e.target).val();

    $('.dev-log')
        .append("<p>Typed in textinput: " + value + "</p>");
});


//    $("div").click

//    $("button").on("click", function(){
//        .html("dev-log", )
//    })
//    $("radio").on("change", )
//    $("checkbox").on("change", )
//    $("select").on("change", )
//    $("text").on("change", )


