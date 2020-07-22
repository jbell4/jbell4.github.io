
$(document).ready(function(){

    pages = ["#splash","#science-head","#computer-engineering","#houseparent", 
    "#science", "#downloads-samples", "#qualification-skills", "#finish"];

    $(".advance , .continue").on("click", buttonRender);
    $(".nav").on("click", showSideTarget);
    $(".blurb-hold").on("click", showParagraph)
    

    //these functions work, but seem too long for me to be satisfied with them
    //  it seems like its too much work for what im doing. (I'm new!)
    //  there's also a bit of a challenge with specificity here. I feel like 
    //  if things get a little bigger they might break if i get sloppy. 
    //  I'll look at these after I get some content in and refactor some stuff.

    function hideAll(){
        for (var i = 0; i < pages.length; i++){
            $(pages[i]).hide();
        }
    };

    function showSideTarget(){

        hideAll();
        //this nicely gets the text from my li-classes
        var liClass = $(this).attr("class").split(/\s+/)[0]

        $(" ul li").removeClass("list-group-item-info");

        switch(liClass){
            case "li-one":
                $(pages[1]).show();
                $(".li-one").addClass("list-group-item-info");
                break;
            
            case "li-two":
                $(pages[2]).show();
                $(".li-two").addClass("list-group-item-info");
                break;
            
            case "li-three":
                $(pages[3]).show();
                $(".li-three").addClass("list-group-item-info");
                break;

            case "li-four":
                $(pages[4]).show();
                $(".li-four").addClass("list-group-item-info");
                break;

            case "li-five":
                $(pages[5]).show();
                $(".li-five").addClass("list-group-item-info");
                break;

            case "li-six":
                $(pages[6]).show();
                $(".li-six").addClass("list-group-item-info");
                break;

            case "li-seven":
                $(pages[7]).show();
                $(".li-seven").addClass("list-group-item-info");
                break;
            
        };
    
    };

    function buttonRender(){
        var currentPage = $(this).closest("section").attr("id");

        $("ul li").removeClass("list-group-item-info");

        switch(currentPage) {
            case "splash":
                $(pages[0]).hide();
                $(".li-one").removeClass("disabled");
                $(".li-one").addClass("list-group-item-info");
                $(".li-one").addClass("completed")
                $(pages[1]).show();
                break;

            case "science-head":
                $(pages[1]).hide();
                $(".li-two").removeClass("disabled");
                $(".li-two").addClass("list-group-item-info");
                $(pages[2]).show();
                break;

            case "computer-engineering":
                $(pages[2]).hide();
                $(".li-three").removeClass("disabled");
                $(".li-three").addClass("list-group-item-info");
                $(pages[3]).show();
                break;

            case "houseparent":
                $(pages[3]).hide();
                $(".li-four").removeClass("disabled");
                $(".li-four").addClass("list-group-item-info");
                $(pages[4]).show();
                break;

            case "science":
                $(pages[4]).hide();
                $(".li-five").removeClass("disabled");
                $(".li-five").addClass("list-group-item-info");
                $(pages[5]).show();
                break;

            case "downloads-samples":
                $(pages[5]).hide();
                $(".li-six").removeClass("disabled");
                $(".li-six").addClass("list-group-item-info");
                $(pages[6]).show();
                break;

            case "qualification-skills":
                $(pages[6]).hide();
                $(".li-seven").removeClass("disabled");
                $(".li-seven").addClass("list-group-item-info");
                $(pages[7]).show();
                break;

            case "finish":
                $(pages[7]).hide();
                $(pages[0]).show();
                break;

        }

    };

    function showParagraph(){
        $(this).children().slideDown();
        $(this).children(".btn").addClass("btn-info");
    

    };
});
