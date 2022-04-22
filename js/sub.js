$(function(){
    $('.glass img:nth-of-type(1)').click(function(){
        $('img:nth-of-type(1)').show();
    });


    $(".button").click(function(){
        toggleClass(".active-color")
    });
});
    // $(function() {
            
//     $(".p_btn").click(function() {
//         var $this = $(this);
//         var target = $this.prev();
//         var num = parseInt(target.text());
//         num++;

//         target.text(num);
//     });

//     $(".m_btn").click(function() {
//         var $this = $(this);
//         var target = $this.next();
//         var num = parseInt(target.text());
//         num -= ( (num === 1) ? 0 : 1 );

//         target.text(num);
//     });
// });