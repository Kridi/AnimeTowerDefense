function randomNumberGenerator(max) {
    return Math.floor((Math.random() * max));
};
function addZombie() {
    var zombie = '<div class="zombie"><img src="img/zombie2.png" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: 20 + randomNumberGenerator(670), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 20);
    zombieObject.data('total', 20);
    zombieObject.data('coins', 3);
    zombieObject.data('damage', 3);
    zombieObject.data('arrived', 0);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 554,
    }, 10000, function () {
        zombieObject.data('arrived', 1);
        game.resources.addDamage(3);
    });    

}
function addFastZombie() {
    var zombie = '<div class="zombie"><img src="img/zombie1.gif" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: 20 + randomNumberGenerator(670), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 1);
    zombieObject.data('total', 1);
    zombieObject.data('coins', 1);
    zombieObject.data('damage', 1);
    zombieObject.data('arrived', 0);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);


    zombieObject.animate({
        left: 554,
    }, 10000, function () {
        zombieObject.data('arrived', 1);
        game.resources.addDamage(1);
    });
}

function addTank() {
    var zombie = '<div class="zombie"><img src="img/tankzombie.gif" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: 20 + randomNumberGenerator(670), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 50);
    zombieObject.data('total', 50);
    zombieObject.data('coins', 5);
    zombieObject.data('damage', 5);
    zombieObject.data('arrived', 0);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 554,
    }, 10000, function () {
        zombieObject.data('arrived', 1);
        game.resources.addDamage(5);
    });
}
function addWalker() {
    var zombie = '<div class="zombie"><img src="img/walker.gif" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: 20 + randomNumberGenerator(670), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 100);
    zombieObject.data('total', 100);
    zombieObject.data('coins', 25);
    zombieObject.data('damage', 25);
    zombieObject.data('arrived', 0);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 554,
    }, 10000, function () {
        zombieObject.data('arrived', 1);
        game.resources.addDamage(25);
    });
}
window.setInterval(function () {
    addTank();
}, 5000);
window.setInterval(function () {
    addZombie();
}, 2500);

window.setInterval(function () {
    addFastZombie();
}, 1000);
window.setInterval(function () {
    addWalker();
}, 25000);


function healthBar(zombie) {
    var healthBar = '<div class="healthBar"><div class="health"></div></div>';
    var healthBarObject = $(healthBar);
    var position = zombie.position();
    healthBarObject.css({ top: position.top + 2, left: position.left + 15 });
    zombie.prepend(healthBarObject);
}
