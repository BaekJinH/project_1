$(function(){
    $('.glass > button:nth-of-type(1)').click(function(){
        $('#one').fadeIn();
        $('#two').hide();
        $('#three').hide();
    });
    $('.glass > button:nth-of-type(2)').click(function(){
        $('#two').fadeIn();
        $('#one').hide();
        $('#three').hide();
    });
    $('.glass > button:nth-of-type(3)').click(function(){
        $('#three').fadeIn();
        $('#one').hide();
        $('#two').hide();
    });
})
$(function(){
    $('.container2 > button:nth-of-typeof(1)').click(function(){
        $('#intro').fadeIn
        $('#pro').hide
        $('#deli').hide
        $('#review').hide
    });
    $('.container2 > button:nth-of-typeof(2)').click(function(){
        $('#pro').fadeIn
        $('#intro').hide
        $('#deli').hide
        $('#review').hide
    });
    $('.container2 > button:nth-of-typeof(3)').click(function(){
        $('#deli').fadeIn
        $('#intro').hide
        $('#pro').hide
        $('#review').hide
    });
    $('.container2 > button:nth-of-typeof(4)').click(function(){
        $('#review').fadeIn
        $('#intro').hide
        $('#pro').hide
        $('#deli').hide
    });
});