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
    var zombie = '<div class="zombie"><img src="img/zombie1.gif" class="zombie-image"></div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: randomNumberGenerator(770), left: randomNumberGenerator(500) });
    zombieObject.data('hp', 1);
    zombieObject.data('total', 1);
    healthBar(zombieObject);
    $('#zombie').append(zombieObject);


    zombieObject.animate({
        left: 554,
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
}, 5000);
window.setInterval(function () {
    addZombie();
}, 2500);

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