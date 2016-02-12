$(document).ready(function(){
    getData();
    $('#post-data').on('click', clickPostData);
    $('#get-data').on('click', getData);
});

function clickPostData() {
    event.preventDefault();
    postData('#name-form', 'name');
    postData('#animal-form', 'animals');
}

function postData (form, file) {
    var values = {};
    $.each($(form).serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $(form).find('input[type=text]').val('');

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/' + file,
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
        }
    });
}

function getData() {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/name',
        success: function(data) {
            $('#name-list').empty();
            //for(var i = 0; i < data.length) --> work in progress?
            $('#name-list').append('<p>' + data + '</p>');
            console.log(data);
        }
    });
    $.ajax({
        type: 'GET',
        url: '/animals',
        success: function(data) {
            $('#animal-list').empty();
            $('#animal-list').append('<p>' + data + '</p>');
            console.log(data);
        }
    });
}