// only load when document is ready
// listen for changes on each input checkbox tag

$document.ready(function () {
  let amenity_dict = {};

  $(input[type='checkbox']).bind('click', function () {
    let amenity_id = $(this).data('id')
    let amenity_name = $(this).data('name')

    if ($(this).is(':checked')) {
      alert($(this).val());
      amenity_dict[amenity_id] = amenity_name;
    } else {
      delete amenity_dict[amenity_id];
    }

    let amenity_list = $.map(amenity_dict, function (value) {
      return value;
    }).sort().join(', ');
    $('div.amenities h4').text(amenity_list);
  });  
});