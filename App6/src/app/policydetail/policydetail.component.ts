import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  	selector: 'policydetail-page',
  	templateUrl: './policydetail.component.html'
  	// styleUrls: ['./home.component.css']
})
export class PolicydetailComponent implements OnInit {

	detacosts: object = {};
	poldetails: object = {};
	detailbtns: object = {};

	constructor() { 

		this.detacosts = [

			{ name: '', classMain: 'CostDetInpt marginL', type: 'text' },
			{ name: '', classMain: 'CostDetInpt', type: 'text' },
			{ name: '', classMain: 'CostDetInpt', type: 'text' },
			{ name: '', classMain: 'CostDetInpt marginR', type: 'text' },
			{ name: '', classMain: 'CostDetInpt marginL', type: 'text' },
			{ name: '', classMain: 'CostDetInpt', type: 'text' },
			{ name: '', classMain: 'CostDetInpt', type: 'text' },
			{ name: '', classMain: 'CostDetInpt marginR', type: 'text' }
		];


		this.poldetails = [

			{
				id: 1,
				label1: 'Client',
				label2: 'Gender',
				label3: 'Smoker',
				label4: 'DOB',
				body1: 'John Hawkyard',
				body2: 'Male',
				body3: 'No',
				body4: '16/08/1964'
			},
			{
				id: 2,
				label1: 'Lead Provider',
				label2: 'Lead Date',
				label3: 'Covered',
				label4: 'Cover Type',
				body1: 'VeroCover',
				body2: '15/03/2019 15:31',
				body3: 'John',
				body4: 'Life'
			},
			{
				id: 3,
				label1: 'Level',
				label2: 'Term',
				label3: 'Death',
				label4: 'SumAssured',
				body1: 'Level',
				body2: 25,
				body3: '1st death',
				body4: '150000.00'
			},
			{
				id: 4,
				label1: 'CIC',
				label2: 'Quote By Prem',
				label3: 'Basis',
				label4: 'Freq',
				body1: '',
				body2: '£35.30',
				body3: 'Sum Assurred',
				body4: 'Monthly'
			},
			{
				id: 5,
				label1: 'Premium',
				label2: 'Quoted on',
				label3: 'Action',
				label4: '',
				body1: 'Guaranteed',
				body2: '23/04/2019 11:59',
				body3: '',
				body4: ''
			}
		];

		this.detailbtns = [

			{ url: 'policydetail', name: 'Lead' },

			{ url: 'policydetail', name: 'Quote Details' },

			{ url: 'policydetail', name: 'ReQuote' }
		]
	}

	ngOnInit() { }

	ngAfterViewInit() {

		$.getScript('assets/js/policies.js');

		$('.PoliciesLead_Fl .notesF_Item:odd').css({ background: '#eee'});



		defaultSplit();

		$('#SplitWithUserId').on('change', function() { defaultSplit(); });

		$(document).on('click', 'label[for="YesDup"]', function() {

			if($('#SplitWithUserId').val() == "") {

				$('#SplitWithUserId').addClass('isRequ');

				$('.addPoliBtn').addClass('desabled_Btn');
				$('.SplitErrorMsg').show().text('Please, Select a Sales Person from Slip With');

			} else {

				$('.addPoliBtn').removeClass('desabled_Btn');
				$('.SplitErrorMsg').hide();
			}
		});

		$(document).on('click', 'label[for="NoDup"]', function() {

			$('#SplitWithUserId').removeClass('isRequ');

			if($('#SplitWithUserId').val() == "") {

				$('.addPoliBtn').removeClass('desabled_Btn');
				$('.SplitErrorMsg').text('Split With is deselected');

			} else { $('.SplitErrorMsg').hide(); }

		});

		function defaultSplit() {

			if($('#SplitWithUserId').val() != "") {

			   	$('#SplitWithUserId').removeClass('isRequ');

			   	$('.addPoliBtn').removeClass('desabled_Btn');

			   	$('.SplitErrorMsg').hide();
			} 

			else {

				if($('#YesDup').is(':checked')) {

				   	$('#SplitWithUserId').addClass('isRequ');

				   	$('.addPoliBtn').addClass('desabled_Btn');

					$('.SplitErrorMsg').show().text('Please, Select a Sales Person from Slip With');
				}

				else {

					//$('#SplitWithUserId').addClass('isRequ');

				   	$('.addPoliBtn').removeClass('desabled_Btn');
					
					$('.SplitErrorMsg').show().text('Split With is deselected');
				}
			}

			if($('#YesDup').is(':checked')) {

				if($('#SplitWithUserId').val() == "") {

					$('.addPoliBtn').addClass('desabled_Btn');
					$('.SplitErrorMsg').show().text('Please, Select a Sales Person from Slip With');

				} else {

					$('.addPoliBtn').removeClass('desabled_Btn');
					$('.SplitErrorMsg').hide();
				}

			} else {

				$('.addPoliBtn').removeClass('desabled_Btn');
				$('.SplitErrorMsg').text('Split With is deselected');
			}

		}




	}
}
