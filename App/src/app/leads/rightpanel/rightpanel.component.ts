import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'rightpanel-page',
	templateUrl: './rightpanel.component.html'
})
export class RightpanelComponent implements OnInit {

	accords: object = {};

	productanswers: object = {};
	loghists: object = {};
	leadpls: object = {};
	calls: object = {}; 

	constructor() { 

		this.accords = [
			{ 
				eventClass: 'accor-link accordion-toggle AccordSide borderGreen', 
				name: 'Product Answers', 
				icon: 'icon-database iconCol', 
				id: 'ProductAnswers', 
				floorClass: 'accordion-content accor-Open-floor default AccordSide'
			},
			{ 
				eventClass: 'accor-link accordion-toggle AccordSide', 
				name: 'Log History', 
				icon: 'icon-shield', 
				id: 'LogHistory', 
				floorClass: 'accordion-content accor-Open-floor AccordSide'
			},
			{ 
				eventClass: 'accor-link accordion-toggle AccordSide', 
				name: 'Merchant Sales', 
				icon: 'icon-group-work', 
				id: 'MerchantSales', 
				floorClass: 'accordion-content accor-Open-floor AccordSide'
			},
			{ 
				eventClass: 'accor-link accordion-toggle AccordSide', 
				name: 'Lead Comments', 
				icon: 'icon-bubbles', 
				id: 'LeadComments', 
				floorClass: 'accordion-content accor-Open-floor AccordSide'
			},
			{ 
				eventClass: 'accor-link accordion-toggle AccordSide', 
				name: 'Lead P&L', 
				icon: 'icon-user-plus', 
				id: 'LeadPL', 
				floorClass: 'accordion-content accor-Open-floor AccordSide'
			},
			{ 
				eventClass: 'accor-link accordion-toggle AccordSide', 
				name: 'Call Recording', 
				icon: 'icon-telephone', 
				id: 'CallRecording', 
				floorClass: 'accordion-content accor-Open-floor AccordSide'
			}
		];
		this.productanswers = [
			{
				labelname: 'DoYouSmoke',
				valuename: 'No'
			},
			{
				labelname: 'HowMuchCover',
				valuename: 150000
			},
			{
				labelname: 'CoverTerm',
				valuename: 25
			},
			{
				labelname: 'TypeOfCover',
				valuename: 'Level'
			},
			{
				labelname: 'PremiumType',
				valuename: 'DontKnow'
			},
			{
				labelname: 'WithCriticalIllness',
				valuename: 'No'
			},
			{
				labelname: 'PartnerDoYouSmoke',
				valuename: ''
			},
			{
				labelname: 'CoverRequiredFor',
				valuename: 'You'
			},
			{
				labelname: 'SurveyQuestion1',
				valuename: ''
			},
			{
				labelname: 'SurveyQuestion2',
				valuename: ''
			},
			{
				labelname: 'SurveyQuestion3',
				valuename: ''
			}
		];
		this.loghists = [
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Retrieved OfferIt affiliate cost via service: 21.5'
			},
			{
				date: '06/03/2019 11:52:29',
				objectype: 'Both phone number are blacklisted Both phone number are blacklisted Both phone number are blacklisted'
			}
		];
		this.leadpls = [
			{
				topClass: 'tr-floor',
				name: 'Revenue',
				tclass: 'revnue',
				result: '0.00'
			},
			{
				topClass: 'tr-floor',
				name: 'Affiliate Cost',
				tclass: 'cost',
				result: '0.00'
			},
			{
				topClass: 'tr-floor',
				name: 'Affiliate Void Cost',
				tclass: 'cost',
				result: '0.00'
			},
			{
				topClass: 'tr-floor',
				name: 'Phone Cost',
				tclass: 'cost',
				result: '0.00'
			},
			{
				topClass: 'tr-floor',
				name: 'Charges',
				tclass: 'cost',
				result: '0.00'
			},
			{
				topClass: 'tr-gp-floor',
				name: 'GP',
				tclass: '',
				result: '0.00'
			}
		];
		this.calls = [
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			},
			{
				date: '07/02/2019 09:31',
				callid: '07777777777'
			}
		]

	}

	ngOnInit() {}

	ngAfterViewInit() {

		// Log History Search(Autocomplete)
		$.getScript('assets/js/leadRight_In.js');
	}
}