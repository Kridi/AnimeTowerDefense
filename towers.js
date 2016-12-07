$('#tower').on('click', function (event) {
    if (game.resources.takeCoins(100)) {
        game.resources.addDefence(1);
        var tower = '<div class="towers"><img src="img/tower1.png" class="towers"></div>';
        var towerObject = $(tower);
        $(towerObject).css({ top: randomNumberGenerators(635), left: 600 + randomNumberGenerators(380) });
        $('#human').append(towerObject);

        window.setInterval(function () {
            var damage = 1;
            var zombie = $($('.zombie')[randomNumberGenerators($('.zombie').length)]);
            attackZombie(zombie, damage);
            displayDamage(towerObject, damage);
        }, 1000);
    }
});
$('#tower2').on('click', function (event) {
    if (game.resources.takeCoins(150)) {
        game.resources.addDefence(3);
        var tower = '<div class="towers"><img src="img/tower2.png" class="towers"></div>';
        var towerObject = $(tower);
        $(towerObject).css({ top: randomNumberGenerators(635), left: 600 + randomNumberGenerators(380) });
        $('#human').append(towerObject);

        window.setInterval(function () {
            var damage = 3;
            var zombie = $($('.zombie')[randomNumberGenerators($('.zombie').length)]);
            attackZombie(zombie, damage);
            displayDamage(towerObject, damage);
        }, 1000);
    }
});
$('#tower3').on('click', function (event) {
    if (game.resources.takeCoins(200)) {
        game.resources.addDefence(5);
        var tower = '<div class="towers"><img src="img/defensive_sniper_tower.png" class="towers"></div>';
        var towerObject = $(tower);
        $(towerObject).css({ top: randomNumberGenerators(635), left: 600 + randomNumberGenerators(380) });
        $('#human').append(towerObject);

        window.setInterval(function () {
            var damage = 5;
            var zombie = $($('.zombie')[randomNumberGenerators($('.zombie').length)]);
            attackZombie(zombie, damage);
            displayDamage(towerObject, damage);
        }, 1000);
    }
});
$('#tower4').on('click', function (event) {
    if (game.resources.takeCoins(500)) {
        game.resources.addDefence(25);
        var tower = '<div class="towers"><img src="img/pewpew4.gif" class="towers"></div>';
        var towerObject = $(tower);
        $(towerObject).css({ top: randomNumberGenerators(635), left: 600 + randomNumberGenerators(380) });
        $('#human').append(towerObject);

        window.setInterval(function () {
            var damage = 25;
            var zombie = $($('.zombie')[randomNumberGenerators($('.zombie').length)]);
            attackZombie(zombie, damage);
            displayDamage(towerObject, damage);
        }, 1000);
    }
});
function displayDamage(towers, damage) {
    var damageText = '<div class="damageText">'+ damage + '</div>';
    var dipslayDamageObject = $(damageText);
    dipslayDamageObject.css({ left: 40, top: -15 });
    towers.prepend(dipslayDamageObject);

    dipslayDamageObject.animate({
        top: -55,
        opacity: 0
    }, 1000, function () {
        dipslayDamageObject.remove();
    });
}
