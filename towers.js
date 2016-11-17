var lastDragOver;
var magicTower = '<img class="magic-tower-child" src="img/magic-tower.png"/>';
var cannonTower = '<img class="cannon-tower-child" src="img/cannon.png"/>';

document.addEventListener("dragstart", function (event) {
    $(document).css('cursor', 'move');
});

$('.arena').on('dragover', function(event) {
    var x = $(event.target).data('x');
    var y = $(event.target).data('y');
    var cell = map[y][x];
    for (var i = 0; i < cell.neighbors.length; i++) {
        if (cell.neighbors[i].available) {
            cell.neighbors[i].el.css('background-color', 'yellow');
        } else {
            cell.neighbors[i].el.css('background-color', 'red');
        }
        
    }
    lastDragOver = cell;
});

$('.arena').on('dragleave', function (event) {
    var x = $(event.target).data('x');
    var y = $(event.target).data('y');
    var cell = map[y][x];
    for (var i = 0; i < cell.neighbors.length; i++) {
        if (cell.neighbors[i].available) {
            cell.neighbors[i].el.css('background-color', '#cccccc');
        } else {
            cell.neighbors[i].el.css('background-color', '#d9d9d9');
        }
    }
});

$('#magic-tower').on('dragend', function (event) {
    forTowers(magicTower);
});

$('#cannon-tower').on('dragend', function (event) {
    forTowers(cannonTower);
});

function forTowers(towerName) {
    var x = lastDragOver.el.data('x');
    var y = lastDragOver.el.data('y');
    var cell = map[y][x];

    var canIBuild = true;
    for (var i = 0; i < cell.neighbors.length; i++) {
        if (cell.neighbors[i].available == false) {
            canIBuild = false;
        }
    }

    if (canIBuild) {
        for (var i = 0; i < cell.neighbors.length; i++) {
            cell.neighbors[i].el.css('background-color', '#d9d9d9');
            cell.neighbors[i].available = false;
        }

        console.log(lastDragOver.y + " " + lastDragOver.x);
        var position = lastDragOver.neighbors[0].el.position();

        var tower = $(towerName);
        tower.css({ top: position.top, left: position.left });

        $('body').append(tower);
    }
}