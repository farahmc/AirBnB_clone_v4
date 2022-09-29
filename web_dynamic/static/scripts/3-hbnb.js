$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: 'http://f6006146b17.9f7fc3ee.hbtn-cod.io:5001/api/v1/places_search/',
        data: '{}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
    }).done(function (response) {
        alert( "Data Saved: " + response );
      });      
});
  