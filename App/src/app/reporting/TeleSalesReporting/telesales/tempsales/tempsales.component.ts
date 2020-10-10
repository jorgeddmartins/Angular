import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'tempsales-page',
	templateUrl: './tempsales.component.html',
	styleUrls: ['./tempsales.component.css']
})
export class TempsalesComponent implements OnInit {

	notifis: object = {};
	clocks: object = {};

	drops: object = {};

	constructor() {

		this.notifis = [

			{ 
				name: 'Nida Lal', 
				value: '18/03/2019 14:00', 
				note: '',
				num: 4 
			},
			{ 
				name: 'Diane Dodd', 
				value: '18/03/2019 14:26', 
				note: '',
				num: 5 
			},
			{ 
				name: 'Karen Taylor', 
				value: '18/03/2019 15:00', 
				note: 'Advise Karen no weekend calls available',
				num: 6 
			}
		];

		this.clocks = [

			{ 
				value: 15 
			},
			{ 
				value: 30 
			},
			{ 
				value: 45 
			},
			{ 
				value: 60 
			}
		];

		this.drops = [

			{
				coverClass: 'thisCover',
				label: 'Cover Required For',
				ckClass: 'CoverInput',
				value: 'Select'
			},
			{
				coverClass: 'thisCoverTerm',
				label: 'Cover Term',
				ckClass: 'TermInput',
				value: 'Select'
			},
			{
				coverClass: 'thisSmoke',
				label: 'Do you smoke',
				ckClass: 'SmokeInput',
				value: 'Select'
			},
			{
				coverClass: 'thisMuch',
				label: 'How much cover',
				ckClass: 'MuchcoverInput',
				value: 'Select'
			},
			{
				coverClass: 'thisPartner',
				label: 'Partner Do You Smoke',
				ckClass: '',
				value: 'Select'
			},
			{
				coverClass: 'thisPremium',
				label: 'Premium Type',
				ckClass: '',
				value: 'Select'
			},
			{
				coverClass: 'thisType',
				label: 'Type Of Cover',
				ckClass: '',
				value: 'Select'
			},
			{
				coverClass: 'thisIllness',
				label: 'With critical illness',
				ckClass: '',
				value: 'Select'
			}
		]
	}

	ngOnInit() {}

	ngAfterViewInit() {

		$.getScript('assets/js/GridTeleSalesCalendar/GridTeleSalesCalendar.js');
	}

}
