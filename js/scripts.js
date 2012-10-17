jQuery(document).ready(function($) {

    var contentbox = $('.selected-price');
    
    $('.price-item').on('click', function(event){

        event.preventDefault();

        var contents = $(this).html(),
            original = contentbox.html();

        $('.listed-prices').append(original);

        $(this).slideUp();
        contentbox.html('');

        contentbox.html('<a class="price-item" href="#">' + contents + '</a>');

    });

}); /* end of as page load scripts */
