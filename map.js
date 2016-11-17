var height = 80;
var length = 150;
var map = [];

for (var i = 0; i < height; i++) {
    var lane = [];
    for (var j = 0; j < length; j++) {
        var cell = {
            x: j,
            y: i,
            available: true
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
        cell.range = addRange(cell);
        console.log(cell.x + " " + cell.y + " " + cell.range[0].length);
    });
});

function addRange(cell) {
    var range = [];
    for (var i = 0; i < 4; i++) {
        var currentRange = addNeighbors(cell, i * 5);
        range.push(currentRange);
    }
    return range;
}

function addNeighbors(cell, range) {
    var neighbors = [];
    // nuo cell.x-2 iki cell.x+2

    var xMin = getMinimumX(cell, range);
    var xMax = getMaximumX(cell, range);

    var yMin = getMaximumY(cell, range);
    var yMax = getMinimumY(cell, range);

    for (var i = xMin ; i <= xMax ; i++) {
        for (var j = yMin ; j <= yMax ; j++) {
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
function getMaximumX(cell, range) {
    var max = cell.x + 2;
    if (max > length -3) {
        max = length - (7 + range);
    }
    if (getMinimumX(cell) == 2) {
        max = 6 + range;
    }
    return max;
}
function getMinimumY(cell, range) {
    var min = cell.y - 2;
    if (min < 0) {
        min = 6 + range;
    }
    if (getMaximumY(cell, range) == height - 1) {
        min = height - (6 + range);
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
