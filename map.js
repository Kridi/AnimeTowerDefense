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
        var cellElement;
        if (index == 0 || index == 1) {
            cellElement = $('<div class="start"></div>');
        } else if (index == length - 1 || index == length -2) {
            cellElement = $('<div class="death"></div>');
        } else {
            cellElement = $('<div class="arena"></div>');
        }

        cellElement.data('x', cell.x);
        cellElement.data('y', cell.y);

        $('#map').append(cellElement);
        cell.el = cellElement;
        cell.neighbors = addNeighbors(cell);
    });
});

function addNeighbors(cell) {
    var neighbors = [];
    // nuo cell.x-2 iki cell.x+2
    for (var i = getMinimumX(cell) ; i <= getMaximumX(cell); i++) {
        for (var j = getMinimumY(cell) ; j <= getMaximumY(cell) ; j++) {
            neighbors.push(map[j][i]);
        }
    }
    return neighbors;
}
function getMinimumX(cell) {
    var min = cell.x - 2;
    if (min < 2) {
        min = 2;
    }
    return min;
}
function getMaximumX(cell) {
    var max = cell.x + 2;
    if (max > length -3) {
        max = length - 7;
    }
    if (getMinimumX(cell) == 2) {
        max = 6;
    }
    return max;
}
function getMinimumY(cell) {
    var min = cell.y - 2;
    if (min < 0) {
        min = 5;
    }
    if (getMaximumY(cell) == height -1) {
        min = height - 5;
    }
    return min;
}
function getMaximumY(cell) {
    var max = cell.y + 2;
    if (max > height - 1) {
        max = height - 1;
    }
    return max;
}
