let input = document.getElementById("input")
let output = document.getElementById('output')


  $("#input").keypress(function (e) {
            if (e.keyCode === 13) {
                $("#theButton").click();
            }
        });


function capitalise(){
	let newName = "";

	for (let l in input.value){
		if (l == 0){
			newName = input.value[l].toUpperCase();
		}else{
			newName += input.value[l].toLowerCase();
		}

	}

	output.innerHTML = "capitalised name: " + newName;
    
}




function add() {
	var ul = document.getElementById("list");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
	input.value = "";
}