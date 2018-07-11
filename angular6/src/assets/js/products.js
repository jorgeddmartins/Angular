
$(function() {

	"use strict"

	let ctx = $("#doughnutProducts").get(0).getContext("2d");
	let dataProducts = [

		{ 
			value: 40, color: "#36b5d7", highlight: "rgba(54, 181, 215, .8)", label: "Insurance" 
		},
		{ 
			value: 20, color: "#225167", highlight: "rgba(34, 81, 103, .8)", label: "Finance" 
		},
		{ 
			value: 10, color: "#206fc6", highlight: "rgba(32, 111, 198, .8)", label: "Software" 
		},
		{
			value: 8, color: "#662d91", highlight: "rgba(102, 45, 145, .8)", label: "Gambling"
		},
		{
			value: 8, color: "#8dc63f", highlight: "rgba(141, 198, 63, .8)", label: "Forex"
		},
		{
			value: 8, color: "#e88f29", highlight: "rgba(232, 143, 41, .8)", label: "Binary"
		},
		{
			value: 8, color: "#fed140", highlight: "rgba(254, 209, 64, .8)", label: "Lottery"
		},
		{
			value: 5, color: "#f0492f", highlight: "rgba(240, 73, 47, .8)", label: "Home Improvement"
		},
		{
			value: 3, color: "#478abc", highlight: "rgba(71, 138, 188, .8)", label: "Travel"
		}

	];

	let chart = new Chart(ctx).Doughnut(dataProducts);

});