var cells = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
var playerone = [];
var playertwo = [];
var player = 1;
var count = 1;

$('#startbutton').click(function() {
    location.reload();
});

function start(){
	console.log(cells);
}

function play(el){
	

switch(player){
	case 1:
	$(el).html("X");

	$.each(cells, function(i){
	if (cells[i] == el.id){
		cells[i] = "x";
		playerone.push(el.id);
	}
});
	player = 2;
	count = count+1;
	$(el).addClass('disabled');
	break;

	case 2:
	$(el).html("O");
	$.each(cells, function(i){
	if (cells[i] == el.id){
		cells[i] = "o"
		playertwo.push(el.id);
	}
});
	player = 1;
	count=count+1;
	$(el).addClass('disabled');
	break;
}

check();
}

// function check(){
// 	if(cells[0] == cells[1] && cells[1] == cells[2]){
// 		alert("win, 012" + cells[0])
// 	}
// 	else if(cells[3] == cells[4] && cells[4] == cells[5]){
// 		alert("win, 345")
// 	}
// 	else if(cells[6] == cells[7] && cells[7] == cells[8]){
// 		alert("win, 678")
// 	}
// 	else if(cells[6] == cells[4] && cells[4] == cells[2]){
// 		alert("win, 642")
// 	}
// 	else if(cells[0] == cells[3] && cells[3] == cells[6]){
// 		alert("win, ")
// 	}
// 	else if(cells[1] == cells[4] && cells[4] == cells[7]){
// 		alert("win, levo")
// 	}
// 	else if(cells[2] == cells[5] && cells[5] == cells[8]){
// 		alert("win, levo")
// 	}
// 	else if(cells[0] == cells[4] && cells[4] == cells[8]){
// 		alert("win, levo")
// 	}
// 	else if(count>9){
// 		alert("draw");
// 	}
// 	}
// var comb = [
//   [0,1,2],
//   [3,4,5],
//   [6,7,8],
//   [6,4,2],
//   [0,3,6],
//   [1,4,7],
//   [2,5,8],
//   [0,4,8]
//   ];


var comb = [
	["a1","a2","a3"],
	["b1","b2","b3"],
	["c1","c2","c3"],
	["a1","b2","c3"],
	["a3","b2","c1"],
	["a1","b1","c1"],
	["a2","b2","c2"],
	["a3","b3","c3"],
	];

function check(){
	$.each(comb, function(j){
		if (containsAll(comb[j], playerone) == true){
			alert("win player X");
			console.log("winning combo is" + comb[j])
		}
		else if(containsAll(comb[j], playertwo) == true){
			alert("win player O")
		}
		else{console.log("no")}


});
}


function containsAll(win, p){ 
  for(var i = 0 , len = win.length; i < len; i++){
     if($.inArray(win[i], p) == -1) return false;
  }
  return true;
}
