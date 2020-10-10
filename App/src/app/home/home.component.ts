import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'home-page',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

	daysDrops: object = {};
	grigTabs: object = {};

	constructor() { 

		this.daysDrops = [

			{ selectedClass: 'selected', name: 'Today' },
			{ selectedClass: '', name: 'Previous Day' },
			{ selectedClass: '', name: 'Last Week' },
			{ selectedClass: '', name: 'This Month' },
			{ selectedClass: '', name: 'Last Month' },
			{ selectedClass: '', name: 'This Quarter' },
			{ selectedClass: '', name: 'Last Quarter' }
		],

		this.grigTabs = [

			{ selClass: 'selected', name: 'All' },
			{ selClass: '', name: 'Requires review' },
			{ selClass: '', name: 'Queued for transfer' },
			{ selClass: '', name: 'Transferred' },
			{ selClass: '', name: 'Rejected' },
			{ selClass: '', name: 'Deleted' },
			{ selClass: '', name: 'Retained' }
		]
		
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/leadsTheme.js');
		// $.getScript('assets/js/thisCalendar.js');

		// $.getScript('assets/js/reset.me.js');

		var data = [
            { text: "Black", value: "1" },
            { text: "Orange", value: "2" },
            { text: "Grey", value: "3" }
        ];

        // create DropDownList from input HTML element
        $("#color").kendoDropDownList({
            dataTextField: "text",
            dataValueField: "value",
            dataSource: data,
            index: 0,
            change: onChange
        });

        function onChange() { var value = $("#color").val(); };


        $(document).on('click', '.TopLeads', function() {

        	$('.daysFl').toggleClass('rotate0');
        });
	}
}
