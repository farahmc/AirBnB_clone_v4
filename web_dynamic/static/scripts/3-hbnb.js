$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: '{}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
    }).done(function (response) {
        alert( "Data Saved: " + response );
      });      
});
  