// only load when document is ready
// listen for changes on each input checkbox tag

document.ready(function() {
  $('input:checkbox[name=amenity.name]').each(function() {    
    if($(this).is(':checked'))
      alert($(this).val());
});
});