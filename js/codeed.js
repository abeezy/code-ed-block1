$('body').delegate('.bs-docs-sidenav li a', 'click', function(){
    $thisLi = $(this).parents('li:first');
    $ul = $thisLi.parents('ul:first');
    if (!$thisLi.hasClass('active')){
        $ul.find('li.active').removeClass('active');
        $thisLi.addClass('active');
    }
});