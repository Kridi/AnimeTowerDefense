var height = 80;
var length = 150;
var map = [];

for (var i = 0; i < height; i++) {
    var lane = [];
    for (var j = 0; j < length; j++) {
        var cell = {
            x: j,
            y: i
        };
        lane.push(cell);
    }
    map.push(lane);
}

$('#map').css('width', 10 * length);

$.each(map, function (index, lane) {
    $.each(lane, function (index, cell) {
        if (index == 0 || index == 1) {
            $('#map').append('<div class="start"></div>');
        } else if (index == length - 1 || index == length -2) {
            $('#map').append('<div class="death"></div>');
        } else {
            $('#map').append('<div class="arena"></div>');
        }
    });
});
