
function makeSketch(btn) {
	var sketch_container = document.createElement("TABLE");
	var sketch_body = document.createElement("TBODY");
	sketch_container.setAttribute("id", "sketchContainer")
	sketch_container.appendChild(sketch_body);
	document.getElementById("sketch_div").appendChild(sketch_container);
	var n;
	var id = btn.id;

	
//only make a grid if there is no grid
if(!document.querySelector("TR")){
	if( id === 'cus_btn') {
		n= prompt("How many squares per side should your new grid have?:", " ");
	}else {
		n=16;
	}

	for ( r = 0; r < n; r++) {
		var table_row = document.createElement("TR");
		table_row.setAttribute("class","etchTR")
		sketch_body.appendChild(table_row);
		for (c = 0; c < n; c++){
			var row_cell = document.createElement("TD");
			row_cell.setAttribute("onmouseover","fillFunction(this)");
			row_cell.setAttribute("onclick","unfillFunction(this)");
			table_row.appendChild(row_cell);
		}		
	}
 } else{
	 alert("Delete this sketch pad before creating a new one");
 }
}

//on hover fill the cell with a color
function fillFunction(cell) {
	cell.style.backgroundColor = '#376f6f';
}

//on click erase the cell with a color
function unfillFunction(cell) {
	cell.style.backgroundColor = 'white';
}


// create a button that clears cells 
function resetSketch() {
	var tbl= document.querySelector('TABLE');
	if(tbl){
		all_tds =document.querySelectorAll("td");
		for (var k=0; k<all_tds.length; k++) {
			var wht_cell =all_tds[k];
			wht_cell.style.backgroundColor="white";
		}
	}else {
		alert("There is no sketch pad to reset");
	}

}


//clear sketch from DOM
function removeSketch() {
		var tbl= document.querySelector('TABLE');
		if (tbl){
			tbl.parentNode.removeChild(tbl);
		}
		else {
			alert("There is no sketch pad to delete");
		}
		
}
