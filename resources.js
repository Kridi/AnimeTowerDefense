var game = {
    resources: {
        hp: 0,
        coins: 0,
        power: 0,
        defences: 0,
        killCount: 0,
        damage: 0,

        addLife: function(lives) {
            this.hp += lives;
            game.interface.setHp(this.hp);
        },
        takeLife: function(lives) {
            this.hp -= lives;
            game.interface.setHp(this.hp);
        },
        addCoins: function(money) {
            this.coins +=  money;
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
        addDamage: function (damage) {
            this.damage += damage;
            game.interface.setDamage(this.damage);
        },
        takeDamage: function (damage) {
            this.damage -= damage;
            game.interface.setDamage(this.damage);
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
        },
        addKillCount: function() {
            this.killCount++;
            game.interface.setKillCount(this.killCount);
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
        },
        setKillCount: function(kill) {
            $('.display-kills').html(kill);
        },
        setDamage: function(damage) {
            $('.display-damage').html(damage);            
        }       
        }
    }

$(document).ready(function() {
    game.resources.addCoins(15);
});

