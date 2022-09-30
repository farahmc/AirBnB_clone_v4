$(document).ready(function () {
  $.ajax({
    url:'http://3ddcb621f547.3ebb58fb.hbtn-cod.io:5001/api/v1/status',
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

  $.ajax({
    url: 'http://3ddcb621f547.3ebb58fb.hbtn-cod.io:5001/api/v1/places_search/',
    type: 'post',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: '{}',
  })
  .done((places) => {
    const section_places = $('section.places').first();
    const articles = [];
    for (let place of places) {
	let article = $('<article>');
	let div_title_box = $('<div>', {"class": "title_box"});
 	let h2_place_name = $('<h2>', {text: place.name});
	let div_price_by_night = $('<div>', {
	    "class": "price_by_night",
	    text: "$" + place.price_by_night
	});
	div_title_box.html(h2_place_name);
	h2_place_name.after(div_price_by_night);
	article.html(div_title_box);
	articles.push(article);

	let div_place_info = $('<div>', {"class": "information"});
	let div_max_guest = $('<div>', {"class": "max_guest", text: place.max_guest + " Guests"});
	let div_num_rooms = $('<div>', {"class": "number_rooms", text: place.number_rooms + " Bedrooms"});
	let div_num_bathrooms = $('<div>', {"class": "number_bathrooms", text: place.number_bathrooms + "Bathrooms"});
	div_place_info.html(div_max_guest);
	div_max_guest.after(div_num_rooms);
	div_num_rooms.after(div_num_bathrooms);
	div_title_box.after(div_place_info);

	const regex = /<br[^>]*>/gi
	let div_place_description = $('<div>', {'class': 'description', text: place.description});
	div_place_info.after(div_place_description)
    } 
    section_places.html(articles);
  });

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
});



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
  
