var cells = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
var player = 1
var count = 1

function start(){
	console.log(cells);
}

function play(el){
	

switch(player){
	case 1:
	$(el).html("X");
	$.each(cells, function(i){
	if (cells[i] == el.id){
		cells[i] = "11"
	}
});
	player = 2;
	count = count+1;
	$(el).attr('onclick','');
	break;

	case 2:
	$(el).html("O");
	$.each(cells, function(i){
	if (cells[i] == el.id){
		cells[i] = "22"
	}
});
	player = 1;
	count=count+1;
	$(el).attr('onclick','');
	break;
}
check();
}

function check(){
	if(cells[0] == cells[1] == cells[2]){
		console.log("win, gore")
	}
	else if(cells[3] == cells[4] == cells[5]){
		console.log("win, levo")
	}
	else if(cells[6] == cells[7] == cells[8]){
		console.log("win, levo")
	}
	else if(cells[6] == cells[4] == cells[2]){
		console.log("win, levo")
	}
	else if(cells[0] == cells[3] == cells[6]){
		console.log("win, levo")
	}
	else if(cells[1] == cells[4] == cells[7]){
		console.log("win, levo")
	}
	else if(cells[2] == cells[5] == cells[8]){
		console.log("win, levo")
	}
	else if(cells[0] == cells[4] == cells[8]){
		console.log("win, levo")
	}
	else if(count>9){
		console.log("draw");
	}
	}
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

