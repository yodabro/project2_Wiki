var $sections = $("#sections");
var count = 0;
var $newSection = $('#new-section');

$newSection.on('click', function (event) {
  event.preventDefault();
  count++;

  var $titleLabel = $('<label for="section-title' + count + '">').text("Section Title: ");
  var $contentLabel = $('<label for="section-content' + count + '">').text("Section Content: ");
  var $titleInput = $('<input id="section-title' + count + '" type="text">').attr("name",
    'article[sections][' + count + '][title]');
  var $contentInput = $('<textarea id="section-content' + count + '">').attr("name",
    'article[sections][' + count + '][content]');

  $sections.append($titleLabel).append($('<br>'))
           .append($titleInput).append($('<br>'))
           .append($contentLabel).append($('<br>'))
           .append($contentInput).append($('<br>'));
});
