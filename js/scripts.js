function Game() {
    this.color1;
    this.color2;
    this.color3;
}

Game.prototype.randomColor= function () {
    var length = Object.keys(this).length;
    var rando = Math.floor((Math.random * length) + 1)
    return this["color" + rando];
};

Game.prototype.addYell = function(number) {
    var addnumber = 1+ number;
    alert("Adding one equals" + addnumber);
};


$(document).ready(function(){

    $(".box").click(function(){
        var length = Object.keys(game).length;
        var rando = Math.floor((Math.random() * length) + 1);
        $(this).css("background-color", game["color" + rando]);

    });

});
