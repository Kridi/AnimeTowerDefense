$(document).on('click', '.zombie', function(event) {
   
    var zombie = $(event.target);
    
    if (zombie.hasClass('zombie-image') || zombie.hasClass('healthBar')) {
        zombie = zombie.parent();
    }
    var dmg = game.resources.power;
    attackZombie(zombie, dmg);
});

function attackZombie(zombie, damage) {
    var hp = zombie.data('hp');
    hp = hp - damage;
    zombie.data('hp', hp);

    var health = zombie.find('.health')[0];
    var total = zombie.data('total');
    var percent = (hp / total) * 100;
    $(health).css('width', percent + '%');    
    

    if (hp <= 0) {
        var zombieCoins = zombie.data('coins');
        game.resources.addCoins(zombieCoins);
        zombie.remove();               
        }
}

$('.killCountDisplay').on(zombie.remove(), function(event){
    var zombiekillCount = 0;
    zombiekillCount += 1;
    zombiekillCount.prepend('.count');
});
$(function counting() {
    $(".count").on(function (attackZombie) {
        $(this).html(this.textContent + 1);
    });
});

    
