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
$('#axe').on('click', function (event) {
    var power = parseInt($('#power').html());
    $('#power').html(power + 1);
    console.log(power);
});
$('#chain').on('click', function (event) {
    var power = parseInt($('#power').html());
    $('#power').html(power + 3);
    console.log(power);
});
$('#fork').on('click', function (event) {
    var power = parseInt($('#power').html());
    $('#power').html(power + 5);
    console.log(power);
});
$('#boy').on('click', function (event) {
    var lives = parseInt($('#hp').html());
    $('#hp').html(lives + 1);
    console.log(lives);
});
$('#girl').on('click', function (event) {
    var lives = parseInt($('#hp').html());
    $('#hp').html(lives + 3);
    console.log(lives);
});
$('#peasant').on('click', function (event) {
    var lives = parseInt($('#hp').html());
    $('#hp').html(lives + 5);
    console.log(lives);
});
$('#tower').on('click', function (event) {
    var defence = parseInt($('#defences').html());
    $('#defences').html(defence + 3);
    console.log(defence);
});
$('#tower2').on('click', function (event) {
    var defence = parseInt($('#defences').html());
    $('#defences').html(defence + 5);
    console.log(defence);
});
$('#tower3').on('click', function (event) {
    var defence = parseInt($('#defences').html());
    $('#defences').html(defence + 10);
    console.log(defence);
});


