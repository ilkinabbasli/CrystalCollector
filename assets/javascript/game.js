var targetScore = 0;
var yourScore = 0;
var winCount = 0;
var lossCount = 0;

var crystal = {
    blue: {
        name: 'blue',
        value: 0
    },
    green: {
        name: 'green',
        value: 0
    },
    red: {
        name: 'red',
        value: 0
    },
    yellow: {
        name: 'yellow',
        value: 0
    }
};

var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

var start = function() {
    yourScore = 0;
    targetScore = getRandom(19, 120);
    crystal.blue.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    
    $('#your-score').text(yourScore);
    $('#target-score').text(targetScore);

};

var check = function () {
    if (yourScore > targetScore) {
        alert('Sorry. You lost!');
        lossCount++;
        $('#loss-count').text(lossCount);

        start();
    }

    else if (yourScore === targetScore) {
        alert('Congrulations! You won!');
        winCount++;
        $('#win-count').text(winCount);

        start();
    }
};

var add = function (clickedCrystal) {
    yourScore += clickedCrystal.value;
    $("#your-score").text(yourScore);
    check();
};

start();

$("#blue").click(function(){
    add(crystal.blue);
  });
  
  $("#red").click(function() {
    add(crystal.red);
  });
  
  $("#green").click(function() {
    add(crystal.green);
  });
  
  $("#yellow").click(function() {
    add(crystal.yellow);
  });