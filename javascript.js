

function showDiv() {
		document.getElementById('wel').style.display = "block";
	}
	
var name1 = document.getElementById('name').value;

function displayoncircle() {
		document.getElementById('message').innerHTML = "Hi " + name1 + "! Welcome to magic circle." +
		" Complete the given tasks to win prizes. Now, enter your favourite colour.";
		document.getElementById('colin').style.display = "block";
	}