$(document).ready(function() {

    $('.tag').each(function (i, domEle) {
    
        var zones = $.makeArray($('.droparea'));
        var tagID = $(domEle).attr("id") + "Drop";
        var dropID = $(zones[i]).attr("id");

        $(function() {
            $(domEle).draggable();
            $(zones[i]).droppable({
                accept: $(domEle),
                //hoverClass: "correct",
                drop: function( event, ui ) {
                    $( this ).addClass( "correct" );
                }
            });
        });

    });

});