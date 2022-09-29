// only load when document is ready
// listen for changes on each input checkbox tag

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
