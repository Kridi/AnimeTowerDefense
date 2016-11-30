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

function randomNumberGenerators(max) {
    return Math.floor((Math.random() * max));
};

$('#tower').on('click', function (event) {
    if (game.resources.takeCoins(5)) {
        game.resources.addDefence(1);
    }
    var tower = '<img src="img/tower1.png" class="towers">';
    var towerObject = $(tower);
    $(towerObject).css({ top: randomNumberGenerators(635), left: 600 + randomNumberGenerators(380) });
    $('#human').append(towerObject);

    
    window.setInterval(function () {
        var damage = 1;
        var zombie = $($('.zombie')[randomNumberGenerators($('.zombie').length)]);
        attackZombie(zombie, damage);
    }, 1000);

});
$('#tower2').on('click', function (event) {
    if (game.resources.takeCoins(10)) {
        game.resources.addDefence(3);
    }
    var tower = '<img src="img/tower2.png" class="towers">';
    var towerObject = $(tower);
    $(towerObject).css({ top: randomNumberGenerators(635), left: 600 + randomNumberGenerators(380) });
    $('#human').append(towerObject);


    window.setInterval(function () {
        var damage = 1;
        var zombie = $($('.zombie')[randomNumberGenerators($('.zombie').length)]);
        attackZombie(zombie, damage);
    }, 1000);
});
$('#tower3').on('click', function (event) {
    if (game.resources.takeCoins(15)) {
        game.resources.addDefence(5);
    }
});
$('.sphere-fill').delay(1000).queue(function () {
    $(this).css('width', '100%')
});


