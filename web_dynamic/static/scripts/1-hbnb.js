// only load when document is ready
// listen for changes on each input checkbox tag

document.ready(function() {
  let amenity_dict = {};

  $('input:checkbox').bind('click', function(){
    let amenity_id = $(this).data('id')
    let amenity_name = $(this).data('name')

    if (this.checked) {
      amenity_dict[amenity_id] = amenity_name;
    } else {
      delete amenity_dict[amenity_id];
    }

    let amenity_list = Array.from(Object.values(amenity_dict));
    $('div.amenities h4').text(amenity_list);

  });  
});