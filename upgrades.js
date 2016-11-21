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

