$(function() {
    $('.bar_container').click(function() {

        if ($('.header_items_sp').hasClass('header_close')) {//header_items_spにheader_closeがあったら

            $('.header_items_sp').removeClass('header_close');//header_items_spのheader_closeを取り除く
            $('.header_items_sp').addClass('header_open');//header_items_spにheader_openを追加

        } else {

            $('.header_items_sp').removeClass('header_open');
            $('.header_items_sp').addClass('header_close');

        }
    });
});


console.log('uuhsbwh');
