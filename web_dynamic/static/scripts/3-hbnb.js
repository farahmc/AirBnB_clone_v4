$(document).ready(function () {
     $.ajax({
        type: "POST",
        url: 'http://1f025ef50d52.9702fef3.hbtn-cod.io:5001/api/v1/places_search/',
        data: '{}',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
    }).done(function (places) {
          const section_places = $('section.places').first();
          const articles = [];
          for (let place of places) {
            let article = $('<article>');
            article.html("<div class='title_box'><h2>" + place.name + "</h2><div class='price_by_night'>" + place.price_by_night + "</div></div><div class='information'><div class='max_guest'>" + place.max_guest + " Guest</div><div class='number_rooms'>" + place.number_rooms + " Bedroom</div><div class='number_bathrooms'>" + place.number_bathrooms + " Bathroom</div></div><div class='description'>" + place.description + "</div>");
            articles.push(article);
            }
          section_places.html(articles);
   });
});
