$(document).on('click', '.zombie', function(event) {

    var hp = $(event.target).data('hp');
    hp = hp - game.resources.power;
    $(event.target).html(hp);
    $(event.target).data('hp', hp);
    if (hp <= 0) {
        $(event.target).remove();
        game.resources.addCoins(1);
    }
    
});