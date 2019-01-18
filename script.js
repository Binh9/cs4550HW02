var ww = {acc:"", afterOp: false, lastOp: ""}; 
document.addEventListener("DOMContentLoaded", function () {
	<!-- For numbers -->
	let loa = document.getElementsByClassName("buttons")
			
	for (let i = 0; i < loa.length; i++) {

		loa[i].addEventListener("click", function() {
			helperNum(loa[i].innerHTML.trim());
		})
	}

	<!-- For operations -->
	let lop = document.getElementsByClassName("oper")

	for (let k = 0; k < lop.length; k++) {
		lop[k].addEventListener("click", function() {
			helperOp(lop[k].innerHTML.trim());
		})
	}
		

	<!-- For clearing -->
	document.getElementById("bC").addEventListener("click", function() {
		document.getElementById("out").value = "";
		ww.acc = "";
		ww.afterOp = false;
		ww.lastOp = "";
	});

	<!-- For decimals -->
	document.getElementById("b.").addEventListener("click", function() {
		if (ww.afterOp) {
			document.getElementById("out").value = "";
			ww.afterOp = false;
		}
		if (document.getElementById("out").value.indexOf(".") == -1) {
			document.getElementById("out").value+=".";
		}
	});

	// Helper to set up the buttons with numbers 
	function helperNum(x) {
		if (ww.afterOp) {
			document.getElementById("out").value = "";
			ww.afterOp = false;
		}
		document.getElementById("out").value+=x;
	}


	// Helper to set up the buttons with operations
	function helperOp(x) {
		if (!ww.afterOp) {
			ww.afterOp = true;
			let cur = document.getElementById("out").value; // the currently displayed value
				
			// Handles case with += (add)
			if (x === "+=") {
				x = "+";
			}

			// Handles case with x (multiplication)
			if (x === "x") {
				x = "*";
			}

			if (ww.lastOp === "") {
				ww.lastOp = "" + x;
				ww.acc = cur.trim();
			}
			else {
				document.getElementById("out").value = eval(ww.acc + ww.lastOp + cur.trim());
				ww.lastOp = "" + x;
				ww.acc = document.getElementById("out").value.trim();
			}
		}
	}
})
