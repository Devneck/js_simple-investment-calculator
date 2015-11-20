// function to capture element id
var $ = function (id) {
    return document.getElementById(id);
}

// function to validate field values and perform investment calculations
var calculateClick = function () {
	var investment = parseFloat($("investment").value);
	var rate = parseFloat($("rate").value);
	var years = parseInt($("years").value);
	
	// validation of entered values - sets focus to offending field with value selected
	if (isNaN(investment)) {
		alert("Investment Amount must be a number");
		$("investment").select();
	} else if (investment == 0) {
		alert("Investment Amount must be greater than zero");
		$("investment").select();
	} else if (isNaN(rate)) {
		alert("Annual Interest Rate must be a number");
		$("rate").select();
	} else if (rate == 0) {
		alert("Annual Interest Rate must be greater than zero");
		$("rate").select();
	} else if (isNaN(years)) {
		alert("Number of Years must be a numeric character");
		$("years").select();
	} else if (years == 0) {
		alert("Number of Years must be greater than zero");
		$("years").select();
	} else {
		
		var future_value = investment;
		
		// loop through calculation for each year of investment
		for (var i = 1; i <= years; i++) {
			future_value = future_value + (future_value * (rate/100));
		}
		// display future calculated value
		$("future_value").value = future_value.toFixed(0);
	}
}

// function to clear all fields and set focus to investment field
function clear() {
	$("investment").value = "";
	$("rate").value = "";
	$("years").value = "";
	$("future_value").value = "";
	$("investment").focus();
}

// window load function to handle events
window.onload = function () {
	$("calculate").onclick = calculateClick;
	$("investment").focus();
	$("clear").onclick = clear;
}