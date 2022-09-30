$(document).ready(function () {
//displaying the red dot
  $.ajax({
    url:'http://1f025ef50d52.9702fef3.hbtn-cod.io:5001/api/v1/status',
    type: 'get',
    dataType: 'json'
  })
  .done((data, status) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
	$('div#api_status').removeClass('available');
    };
  });


//displaying ALL places from front-end
  $.ajax({
    url: 'http://1f025ef50d52.9702fef3.hbtn-cod.io:5001/api/v1/places_search/',
    type: 'post',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: '{}',
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
    
//dispalying checkbox with each checked item
  let amenity_dict = {};

  $('input[type=checkbox]').bind('click', function () {
    let amenity_id = $(this).data('id')
    let amenity_name = $(this).data('name')

    if ($(this).is(':checked')) {
      amenity_dict[amenity_id] = amenity_name;
    } else {
      delete amenity_dict[amenity_id];
    }

    let amenity_list = $.map(amenity_dict, function (value) {
      return value;
    }).sort().join(', ');
    $('.amenities h4').text(amenity_list);
  });
  

// request places_search api endpoint when search button is clicked
  $("button").click(function(){
       $.ajax({
          url: 'http://1f025ef50d52.9702fef3.hbtn-cod.io:5001/api/v1/places_search',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: JSON.stringify({'amenities': Object.keys(amenity_dict)}),
      })
        .done((places) => {
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
});
