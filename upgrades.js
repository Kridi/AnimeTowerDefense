$('#weapons').on('click', function (event) {
    $('#panel-weapons').toggle();
    $('#panel-people').hide();
    $('#panel-defence').hide();
    console.log("weapons has been clicked");
});
$('#people').on('click', function (event) {
    $('#panel-people').toggle();
    $('#panel-defence').hide();
    $('#panel-weapons').hide();
    console.log("people has been clicked");
});
$('#defence').on('click', function (event) {
    $('#panel-defence').toggle();
    $('#panel-weapons').hide();
    $('#panel-people').hide();
    console.log("defence has been clicked");
});



$('#axe').on('click', function (event) {
    if (game.resources.takeCoins(5)) {
        game.resources.addPower(1);
    }
});
$('#chain').on('click', function (event) {
    if (game.resources.takeCoins(10)) {
        game.resources.addPower(3);
    }
});
$('#fork').on('click', function (event) {
    if (game.resources.takeCoins(15)) {
        game.resources.addPower(5);
    }
});



$('#boy').on('click', function (event) {
    if (game.resources.takeCoins(5)) {
        game.resources.addLife(1);
    }
});
$('#girl').on('click', function (event) {
    if (game.resources.takeCoins(10)) {
        game.resources.addLife(3);
    }
});
$('#peasant').on('click', function (event) {
    if (game.resources.takeCoins(15)) {
        game.resources.addLife(5);
    }
});



$('#tower').on('click', function (event) {
    if (game.resources.takeCoins(5)) {
        game.resources.addDefence(1);
    }
});
$('#tower2').on('click', function (event) {
    if (game.resources.takeCoins(10)) {
        game.resources.addDefence(3);
    }
});
$('#tower3').on('click', function (event) {
    if (game.resources.takeCoins(15)) {
        game.resources.addDefence(5);
    }
});


