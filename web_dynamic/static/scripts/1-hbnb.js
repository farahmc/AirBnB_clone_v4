// only load when document is ready
// listen for changes on each input checkbox tag
var checkboxes = document.querySelectorAll("input[type=checkbox][name=amenity.name]");
let enabledSettings = []

document.ready(function() {
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
          enabledSettings = 
            Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
            .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
            .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
            
          console.log(enabledSettings)
    
});