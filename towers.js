var lastDragOver;
var magicTower = '<img class="magic-tower-child" src="img/magic-tower.png"/>';

document.addEventListener("dragstart", function (event) {
    console.log("pavyko");
});

$('.arena').on('dragover', function(event) {
    var x = $(event.target).data('x');
    var y = $(event.target).data('y');
    var cell = map[y][x];
    for (var i = 0; i < cell.neighbors.length; i++) {
        cell.neighbors[i].el.css('background-color', 'yellow');
    }
    lastDragOver = cell;
});

$('.arena').on('dragleave', function (event) {
    var x = $(event.target).data('x');
    var y = $(event.target).data('y');
    var cell = map[y][x];
    for (var i = 0; i < cell.neighbors.length; i++) {
        cell.neighbors[i].el.css('background-color', '#cccccc');
    }
});

$('#magic-tower').on('dragend', function (event) {
    var x = lastDragOver.el.data('x');
    var y = lastDragOver.el.data('y');
    var cell = map[y][x];
    for (var i = 0; i < cell.neighbors.length; i++) {
        cell.neighbors[i].el.css('background-color', 'yellow');
    }

    console.log(lastDragOver.y + " " + lastDragOver.x);
    var position = lastDragOver.neighbors[0].el.position();

    var tower = $(magicTower);
    tower.css({ top: position.top, left: position.left });

    $('body').append(tower);
});