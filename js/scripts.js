let $send = $('#send');

$send.on('click', (e) => {
    $('#comment').appendTo(function() {
        $('.record').text($("#comment").val());
    });
});


    // $('#comment')














