var game = {
    resources: {
        hp: 0,
        coins: 0,
        power: 0,
        defences: 0,
        addLife: function(lives) {
            this.hp += lives;
            game.interface.setHp(this.hp);
        },
        takeLife: function(lives) {
            this.hp -= lives;
            game.interface.setHp(this.hp);
        },
        addCoins: function(money) {
            this.coins += money;
            game.interface.setCoins(this.coins);
        },
        takeCoins: function (money) {
            if (this.coins >= money) {
                this.coins -= money;
                game.interface.setCoins(this.coins);
                return true;
            } else {
                return false;
            }
        },
        addPower: function(power) {
            this.power += power;
            game.interface.setPower(this.power);
        },
        takePower: function (power) {
            this.power -= power;
            game.interface.setPower(this.power);
        },
        addDefence: function(defence) {
            this.defences += defence;
            game.interface.setDefences(this.defences);
        },
        takeDefence: function(defence) {
            this.defences -= defence;
            game.interface.setDefences(this.defences);
        }
    },
    interface: {
        setHp: function(hp) {
            $('#hp').html(hp);
        },
        setCoins: function(money) {
            $('#coins').html(money);
        },
        setPower: function(power) {
            $('#power').html(power);
        },
        setDefences: function(defence) {
            $('#defences').html(defence);
        }
    }
}
$(document).ready(function() {
    game.resources.addCoins(15);
});