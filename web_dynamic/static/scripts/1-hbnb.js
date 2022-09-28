// only load when document is ready
// listen for changes on each input checkbox tag

document.ready(function() {
  var amenity_list = [];
  $.each($("input[name='amenity.name']:checked"), function(){
      amenity_list.push($(this).val());
  });
  
  $('div.amenities h4').text(amenity_list.join(', '));
    
});