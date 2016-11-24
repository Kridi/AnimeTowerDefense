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
$('#fork').on('click', function (event) {
    var power = parseInt($('#power').html());
    $('#power').html(power + 1);
    console.log(power);
});
$('#handgun').on('click', function (event) {
    var power = parseInt($('#power').html());
    $('#power').html(power + 5);
    console.log(power);
});
$('#shotgun').on('click', function (event) {
    var power = parseInt($('#power').html());
    $('#power').html(power + 10);
    console.log(power);
});
$('#pleb').on('click', function (event) {
    var hp = parseInt($('#hp').html());
    $('#hp').html(hp + 1);
    console.log(hp);
});
$('#fighter').on('click', function (event) {
    var hp = parseInt($('#hp').html());
    $('#hp').html(hp + 5);
    console.log(hp);
});
$('#swat').on('click', function (event) {
    var hp = parseInt($('#hp').html());
    $('#hp').html(hp + 10);
    console.log(hp);
});
$('#tower').on('click', function (event) {
    var def = parseInt($('#def').html());
    $('#def').html(def + 1);
    console.log(def);
});
$('#tower2').on('click', function (event) {
    var def = parseInt($('#def').html());
    $('#def').html(def + 5);
    console.log(def);
});
$('#tower3').on('click', function (event) {
    var def = parseInt($('#def').html());
    $('#def').html(def + 10);
    console.log(def);
});

