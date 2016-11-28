function randomNumberGenerator(max) {
    return Math.floor((Math.random() * max));
};
function addZombie() {
    var zombie = '<div class="zombie">20</div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: randomNumberGenerator(800), left: randomNumberGenerator(600) });
    zombieObject.data('hp', 20);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 600,
    }, 10000, function () {
        
    });

}
function addFastZombie() {
    var zombie = '<div class="zombie">1</div>';
    var zombieObject = $(zombie);
    zombieObject.css({ top: randomNumberGenerator(800), left: randomNumberGenerator(600) });
    zombieObject.data('hp', 1);
    $('#zombie').append(zombieObject);

    zombieObject.animate({
        left: 600,
    }, 1000, function () {

    });
}
window.setInterval(function () {
    addZombie();
}, 1000);

window.setInterval(function () {
    addFastZombie();
}, 4000);
