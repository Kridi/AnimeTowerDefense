function randomNumberGenerator(max) {
    return Math.floor((Math.random() * max));
};
function addZombie() {
    var zombie = '<div class="zombie"><img src="img/zombie2.png" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: randomNumberGenerator(770), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 20);
    zombieObject.data('total', 20);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 554,
    }, 10000, function () {

    });    

}
function addFastZombie() {
    var zombie = '<img src="img/zombie1.gif" class="zombie">';
    var zombieObject = $(zombie);
    zombieObject.css({ top: randomNumberGenerator(770), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 1);
    $('#zombie').append(zombieObject);


    zombieObject.animate({
        left: 570,
    }, 10000, function () {

    });
}

function addTank() {
    var zombie = '<div class="zombie"><img src="img/tankzombie.gif" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: randomNumberGenerator(770), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 50);
    zombieObject.data('total', 50);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 554,
    }, 10000, function () {

    });
}
window.setInterval(function () {
    addTank();
    addZombie();
}, 5000);

window.setInterval(function () {
    addFastZombie();
}, 1000);

function healthBar(zombie) {
    var healthBar = '<div class="healthBar"><div class="health"></div></div>';
    var healthBarObject = $(healthBar);
    var position = zombie.position();
    healthBarObject.css({ top: position.top - 8, left: position.left + 15 });
    zombie.append(healthBarObject);
}
function fillGauge(sphere) {
    var gauge = '<div class="sphere"></div>';
    var gaugeFill = $(fillGauge);
    var position = sphere.position();
    sphere.append(fillGauge);

    fillGauge.animate({
    }, 10000, function () {

    });
}